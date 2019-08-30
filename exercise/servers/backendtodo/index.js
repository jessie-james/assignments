const express = require('express')
const app = express()
const data = require('./todo.json')
const uuid = require('uuid/v4')
const PORT = 3095

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})


app.use('/', express.json())

app.get('/todos', (req, res) => {
    res.send(data)
})

app.get('/todos/:_id', (req, res) => {
    const _id = req.params._id
    const item = data.find((todos) => todos._id === _id)
    res.send(item)
})

app.post('/todos', (req, res) => {
    let newtodo = req.body
    newtodo._id = uuid()
    data.push(newtodo)
    res.send({
        msg: "this si it", 
        newtodo
    })
})

app.put('/todos/:_id', (req, res) => {
    let updatedTodo = req.body
    _id = req.params._id
    data.forEach(tododo => _id === tododo._id ? Object.assign(tododo, updatedTodo) : tododo)
    res.send({
        msg: "this is workign",
        msg: "sent"
    })
})

app.delete('/todos/:_id', (req, res) => {
    _id = req.params._id
    let index = data.findIndex(todos => todos._id === _id) 
    data.splice(index, 1)
    res.send({msg:"it got deleted"})
})