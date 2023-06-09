const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const Register = require('./routes/auth/register');
const Login = require('./routes/auth/login');
const Post = require('./routes/posts/create-post');
const CheckStatus = require('./routes/auth/check-status');
const GetUserPosts = require('./routes/posts/get-user-posts');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api', Register);
app.use('/api/login', Login);
app.use('/api/post', Post);
app.use('/api/post', GetUserPosts);
app.use('/api/check-status', CheckStatus);


//Connect to DB
try {
    mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to DB');
} catch (error) {
    console.log(error);
}

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})