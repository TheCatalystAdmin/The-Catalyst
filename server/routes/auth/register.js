const User = require('../../models/User');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../../utils/createError');

router.post('/', async (req, res) => {
    const {username, email, password} = req.body;
    //Check if email already exists
    const exists = await User.findOne({email});
    if (exists) {
        return res.status(409).json(createError('User already exists', 409));
    }
    const salt = await bcrypt.genSalt(10);
    //Hash the password
    const hashed = await bcrypt.hash(password, salt);
    const user = new User({
        username,
        email,
        password: hashed,
    });
    try {
        const savedUser = await user.save();
        //Create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        return res.header('auth-token', token).json(savedUser);
    } catch (err) {
        return res.status(500).json(createError('Sorry, something went wrong!', 500));
    }
})
module.exports = router;