const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("JWT Verification Error:", err.message);
            return res.status(403).json({ message: 'Token is invalid' });
        }

        req.user = user;

        // Ensure req.session exists before assigning user data
        if (req.session) {
            if (!req.session.user) {
                req.session.user = { id: user.id, email: user.email };
            }
        } else {
            console.warn("Session middleware is not initialized.");
        }

        next();
    });
}

module.exports = authenticateJWT;
