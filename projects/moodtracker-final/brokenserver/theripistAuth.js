const express = require("express")
const theripistAuth = express.Router();
const jwt = require("jsonwebtoken");
const Theripist = require("../models/theripist");



// theripistAuth.post("/signup", (req, res, next) => {
//     console.log(req.body)
//     Theripist.findOne({ username: req.body.username}, (err, existingUser) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         } else if (existingUser !== null) {
//             res.status(400);
//             return next(new Error("That username already exists!"));
//         }
//         const newTheripist = new Theripist(req.body);
//         newTheripist.save((err, user) => {
//             if (err) return res.status(500).send({ success: false, err });
//             const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
//             return res.status(201).send({ user: user.withoutPassword(), token });
//         });
//     });
// });

theripistAuth.post("/login", (req, res, next) => {
    console.log("/login")
    Theripist.findOne({ username: req.body.username}, (err, user) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!user) {
            res.status(403);
            return next(new Error("Username or password are incorrect"));
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) res.status(401).send({ message: "Username or password are incorrect" });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ user: user.withoutPassword(), token })
        });
    });
})

module.exports = theripistAuth;