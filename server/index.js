const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
app.use(express.json());

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