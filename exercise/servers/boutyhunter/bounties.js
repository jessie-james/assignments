const express = require('express')
const bountyRouter = express.Router()
const data = require('./bounty.json')
const uuid = require('uuid/v4')

bountyRouter.route('/')
    .get((req, res) => {
        res.send(data)
    })

    .post((req, res) => {
        let newBounty = req.body
        newBounty._id = uuid()
        data.push(newBounty)
        res.send({
            msg: 'Successfully added new bounty',
            newBounty
        })
    })

bountyRouter.route('/:_id')
    .get((req, res) => {
        const _id = req.params._id
        const bounties = data.find((bounty) => bounty._id === _id)
        res.send(bounties)
    })
    .put((req, res) => {
        const _id = req.params._id
        const updateBounty = req.body
        data.forEach(bounty => _id === bounty._id ? Object.assign(bounty, updateBounty) : bounty)
        res.send({
            msg: 'Successfully updated object'
        })
    })
    .delete((req, res) =>{
        const _id = req.params._id
        let index = data.findIndex(bounty => _id === bounty._id)
        data.splice(index, 1)
        res.send({
            msg:"its deleted"
        })
    })


module.exports = bountyRouter