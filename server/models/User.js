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
    date: {
        type: Date,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    hearts: {
        type: Number,
        required: true,
    },
    topics: {
        type: [String],
        default: []
    },
    comments: {
        type: [commentSchema],
        default: [],
    },
}, {timestamps: true})

const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    posts: {
        type: [String],
        default: [],
    },
    premium: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true}, {collection: 'users'});

const UserModel = mongoose.model('User', schema);
module.exports = UserModel;
