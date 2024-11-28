const { body } = require('express-validator');

const userValidationRules = () => [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const loginValidationRules = () => [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
];

const forgotPasswordValidationRules = () => [
    body('email').isEmail().withMessage('Invalid email format'),
];

const resetPasswordValidationRules = () => [
    body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long'),
];

module.exports = {
    userValidationRules,
    loginValidationRules,
    forgotPasswordValidationRules,
    resetPasswordValidationRules,
};
