const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Register = require('./routes/auth/register');
const Login = require('./routes/auth/login');
const Post = require('./routes/posts/create-post');
dotenv.config();
app.use(express.json());
app.use('/api/register', Register);
app.use('/api/login', Login);
app.use('/api/post', Post);

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