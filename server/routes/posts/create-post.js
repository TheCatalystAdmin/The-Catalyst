const Post = require('../../models/Post');
const User = require('../../models/User');
const createError = require('../../utils/createError');
const router = require('express').Router();

//Create a new post
router.post('/new', async (req, res) => {
    const {title, description, body, id, topics} = req.body;
    const user = await User.findOne({_id: id});
    if (!user) return res.status(404).json(createError('User not found', 404));
    const post = new Post({title, topics, description, body, authorName: user.firstName + " " + user.lastName, authorUsername: user.username});
    try {
        const savedPost = await post.save();
        user.posts.push(savedPost._id);
        await user.save();
        return res.json(savedPost);
    }
    catch (err) {
        return res.status(500).json(createError('Sorry, something went wrong!', 500));
    }

});
module.exports = router;