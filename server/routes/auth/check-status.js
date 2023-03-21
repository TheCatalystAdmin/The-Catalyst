const User = require('../../models/User');
const router = require('express').Router();
const createError = require('../../utils/createError');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => { //We need this route to check if the user is logged in or not
    const { id, token } = req.query;
    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).json(createError('User not found', 404));
    try {
        const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decoded);
        if (decoded._id === user._id.toString()) {
            return res.status(200).json({message: 'User is logged in',status: true});
        } else {
            console.log("User is NOT logged in");
            return res.status(401).json(createError('Unauthorized', 401));
        }
    } catch (err) {
        console.log(err);
        return res.status(401).json(createError('Unauthorized', 401));
    }
});
module.exports = router;