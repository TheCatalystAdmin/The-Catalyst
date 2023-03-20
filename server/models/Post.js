const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
    },
    authorUsername: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    body: {
        type: Array
    },
    hearts: {
        type: Number,
        default: 0,
    },
    topics: {
        type: [String],
        default: []
    },
    comments: {
        type: [commentSchema],
        default: [],
    },
}, {timestamps: true}, {collection: 'posts'});

const PostModel = mongoose.model('Post', postSchema);
module.exports = PostModel;