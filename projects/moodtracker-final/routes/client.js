const express = require("express");
const clientRouter = express.Router();
const Client = require("../models/client.js");

clientRouter.get("/", (req, res, next) => {
    Client.find({ user: req.user._id }, (err, clients) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(clients);
    });
});

clientRouter.post("/", (req, res, next) => {
    const client = new Client(req.body);
    client.user = req.user._id;
    client.save(function (err, newClient) {
        if (err) {
            res.status(501);
            return next(err);
        }
        return res.status(201).send(newClient);
    });
});

clientRouter.get("/:clientid", (req, res, next) => {
    Client.findOne({ _id: req.params.clientid, user: req.user._id }, (err, client) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!client) {
            res.status(404)
            return next(new Error("No client item found."));
        }
        return res.send(client);
    });
});

clientRouter.put("/:clientId", (req, res, next) => {
    Client.findOneAndUpdate(
        { _id: req.params.clientId, user: req.user._id },
        req.body,
        { new: true },
        (err, client) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(client);
        }
    );
});

clientRouter.delete("/:clientId", (req, res, next) => {
    Client.findOneAndRemove({ _id: req.params.clientId, user: req.user._id }, (err, client) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(client);
    });
});

module.exports = clientRouter;