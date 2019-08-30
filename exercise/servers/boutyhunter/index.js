const express = require('express')
const app = express()
const PORT = 3009

app.use('/', express.json())
app.use('/bounty',require('./bounties.js'))

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})
