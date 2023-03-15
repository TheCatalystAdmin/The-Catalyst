const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../../utils/createError');
const router = require('express').Router();

router.post('/', async (req, res) => {
    const {email, password} = req.body;
    //Check if email exists
    const exists = await User.findOne({email});
    if (!exists) return res.status(401).json(createError("User doesn't exist", 401));
    //Check if password is correct
    const valid = await bcrypt.compare(password, exists.password);
    if (!valid) return res.status(401).json(createError('Invalid password', 401));
    //Create and assign a token
    const token = jwt.sign({_id: exists._id}, process.env.TOKEN_SECRET);
    return res.header('auth-token', token).json(exists);
});
module.exports = router;
