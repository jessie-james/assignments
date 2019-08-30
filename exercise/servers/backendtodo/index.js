const express = require('express')
const app = express()
const PORT = 3095

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})


app.use('/', express.json())
app.use('/todos', require('./todoRoutes'))

