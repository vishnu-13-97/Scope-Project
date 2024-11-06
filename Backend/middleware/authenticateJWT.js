
const jwt = require('jsonwebtoken');


function authenticateJWT(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: 'Access token is missing' });
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is invalid' });

        req.user = user;
        // Set session user data if not already set
        if (!req.session.user) req.session.user = { id: user.id, email: user.email };

        next();
    });
}


 module.exports = authenticateJWT;