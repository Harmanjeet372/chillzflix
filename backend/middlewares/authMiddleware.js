const jwt = require('jsonwebtoken');

const ERROR_MESSAGES = {
    NO_TOKEN: 'No token, authorization denied',
    INVALID_TOKEN: 'Token is not valid',
};

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
        return res.status(401).json({ message: ERROR_MESSAGES.NO_TOKEN });
    }

    const token = authHeader.replace('Bearer ', '');
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        console.error('Error in authMiddleware:', err);
        res.status(401).json({ message: ERROR_MESSAGES.INVALID_TOKEN });
    }
};

module.exports = authMiddleware;
