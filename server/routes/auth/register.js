const User = require('../../models/User');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../../utils/createError');

//Create a new user
router.post('/', async (req, res) => {
    const {username, email, password, firstName, lastName} = req.body;
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
        firstName,
        lastName,
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

//Modify an existing user
router.put('/', async (req, res) => {
    const {username, email} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(404).json(createError('User not found', 404));
    user.username = username;
    try {
        const savedUser = await user.save();
        return res.json(savedUser);
    } catch (err) {
        return res.status(500).json(createError('Sorry, something went wrong!', 500));
    }

});

module.exports = router;