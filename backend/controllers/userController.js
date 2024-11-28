const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const userModel = require('../models/userModel');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        console.log("At Transport ", to, subject, text)
        await transporter.sendMail({ to, subject, text });
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
        throw new Error('Failed to send email');
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new userModel({ name, email, password: hashedPassword });
        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '48h' });

        await sendEmail(user.email, 'Welcome to Our App', `Hi ${user.name}, welcome to our ChillFlix app!`);

        res.status(201).json({ status: 201, message: 'User created successfully', user, token });
    } catch (err) {
        console.error('Error in createUser:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '48h' });

        res.json({ status: 200, message: 'Login successful', user, token });
    } catch (err) {
        console.error('Error in loginUser:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 15 * 60 * 1000;
        await user.save();

        await sendEmail(user.email, 'Password Reset', `You requested a password reset. Click the link to reset your password: ${process.env.CLIENT_URL}/reset-password/${resetToken}`);

        res.json({ message: 'Password reset link sent' });
    } catch (err) {
        console.error('Error in forgotPassword:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userModel.findOne({
            resetToken: token,
            resetTokenExpiration: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Token is invalid or expired' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        user.resetToken = undefined;
        user.resetTokenExpiration = undefined;
        await user.save();

        res.json({ message: 'Password has been reset' });
    } catch (err) {
        console.error('Error in resetPassword:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const createVerificationToken = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const verificationToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.verificationToken = verificationToken;
        user.verificationTokenExpiration = Date.now() + 1 * 60 * 60 * 1000; // 1 hour
        await user.save();

        await sendEmail(user.email, 'Email Verification', `Please verify your email by clicking the link: ${process.env.CLIENT_URL}/verify-email/${verificationToken}`);

        res.json({ message: 'Verification link sent' });
    } catch (err) {
        console.error('Error in createVerificationToken:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const generateAdminToken = async (req, res) => {
    const { email, password } = req.body;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return res.status(403).json({ message: 'Invalid credentials' });
    }

    try {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '48h' });
        res.json({ token });
    } catch (err) {
        console.error('Error in generateAdminToken:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await userModel.findByIdAndDelete(userId);

        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error in deleteUser:', err);
        res.status(500).json({ message: 'Server error' });
    }
};


const verifyToken = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    
    const user = await userModel.findById(decoded.user.id);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Token is valid', userId: decoded.userId });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { createUser, loginUser, forgotPassword, resetPassword, createVerificationToken, generateAdminToken, deleteUser,verifyToken };
