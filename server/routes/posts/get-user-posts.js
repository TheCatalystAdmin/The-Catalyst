const User = require('../../models/User');
const Post = require('../../models/Post');
const router = require('express').Router();

router.get('/fetch-user-posts', async (req, res) => {
    const {id} = req.query;
    const user = await User.findById(id);
    let dataToSend = [];
    for (let i = user.posts.length - 1; i >= 0; i--) {
        const post = await Post.findById(user.posts[i]);
        dataToSend.push({
            id: post._id,
            title: post.title,
            authorName: post.authorName,
            authorUsername: post.authorUsername,
            description: post.description,
        });
    }
    return res.json(dataToSend);
});
module.exports = router;