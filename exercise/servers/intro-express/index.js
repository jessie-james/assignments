const express = require('express');
const app = express();

app.listen(3995, () => {
    console.log('running on port 3995')
})

app.get('/', (request, responce) => {
    responce.send('hello World how are you')
})
