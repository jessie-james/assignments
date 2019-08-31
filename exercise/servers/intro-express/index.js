const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost27017/introexpress', { useNewUrlParser: true })
    .then(() => {
    console.log('connected to mongodb')
    })
    .catch(err => {
    console.log(err)
})

app.listen(3995, () => {
    console.log('running on port 3995')
})

app.get('/', (request, responce) => {
    responce.send('hello World how are you')
})
