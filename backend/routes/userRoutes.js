const express = require('express');
const { 
  createUser, 
  loginUser, 
  forgotPassword, 
  resetPassword, 
  createVerificationToken, 
  generateAdminToken, 
  deleteUser, 
  verifyToken
} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { 
  userValidationRules, 
  loginValidationRules, 
  forgotPasswordValidationRules
} = require('../middlewares/validateMiddleware');

const router = express.Router();

// Hello route
router.get('/hello', (req, res) => {
  res.send('Hello from the backend!');
});

// Route to create a new user (signup) - no authentication required
router.post('/users/signup', userValidationRules(), createUser);

// Route to login user - no authentication required
router.post('/users/login', loginValidationRules(), loginUser);

// Route to request a password reset link - no authentication required
router.post('/users/forgot-password', forgotPasswordValidationRules(), forgotPassword);

// Route to verify email after signup
router.post('/users/verify-email', createVerificationToken);

// Route to reset password with the token
router.post('/users/reset-password/:token', resetPassword);

// Route to generate an admin token - requires authentication
router.post('/admin/admin-token', authMiddleware, generateAdminToken);

// Route to delete a user - requires authentication
router.delete('/admin/delete-user/:userId', authMiddleware, deleteUser);

// Route to verify token
router.post('/users/verifyToken', verifyToken);

module.exports = router;
