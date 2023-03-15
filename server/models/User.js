const mongoose = require('mongoose');

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
}, {timestamps: true}, {collection: 'users'});

const UserModel = mongoose.model('User', schema);
module.exports = UserModel;
