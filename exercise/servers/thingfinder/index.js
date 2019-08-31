const express = require('express')
const uuid = require('uuid/v4')
const app = express()
const PORT = 3498

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})


app.use('/', express.json())
