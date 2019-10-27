const express = require("express")
const User = require("../models/user.js")
const authRouter = express.Router();
const jwt = require("jsonwebtoken");


authRouter.post("/signin", (req, res, next) => {
    User.findOne({ email: req.body.empail }, (err, existingEmail) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (existingEmail !== null) {
            res.status(400);
            return next(new Error("That Email already exists. You may already have an account"));
        }
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) return res.status(500).send({ success: false, err });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({ user: user.withoutPassword(), token });
        });
    });
});