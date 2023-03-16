const jwt = require('jsonwebtoken');
const createError = require('./createError');

const VerifyToken = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json(createError('Access denied', 401));
    try {
        const signed = await jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (err) {
        return res.status(401).json(createError('Access denied', 401));
    }
}
module.exports = VerifyToken;