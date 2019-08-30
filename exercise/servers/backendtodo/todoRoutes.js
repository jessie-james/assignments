const express = require('express')
const todoRouter = express.Router()
const data = require('./todo.json')
const uuid = require('uuid/v4')

todoRouter.route('/')

    .get((req, res) => {
    res.send(data)
    })

    .post((req, res) => {
        let newtodo = req.body
        newtodo._id = uuid()
        data.push(newtodo)
        res.send({
            msg: "this si it",
            newtodo
        })
    })

todoRouter.route('/:_id')
    .get((req, res) => {
        const _id = req.params._id
        const item = data.find((todos) => todos._id === _id)
        res.send(item)
    })
    .put((req, res) => {
        let updatedTodo = req.body
        _id = req.params._id
        data.forEach(tododo => _id === tododo._id ? Object.assign(tododo, updatedTodo) : tododo)
        res.send({
            msg: "this is workign",
            msg: "sent"
        })
    })

    .delete((req, res) => {
        _id = req.params._id
        let index = data.findIndex(todos => todos._id === _id)
        data.splice(index, 1)
        res.send({ msg: "it got deleted" })
    })