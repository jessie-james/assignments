const express = require("express");
const surveyRouter = express.Router();
const Survey = require("../models/survey");

surveyRouter.get("/", (req, res, next) => {
    //if admin get all else  retrun error that they are not authorized.
    Todo.find({ user: req.user._id }, (err, surveys) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(surveys);
    });
});

surveyRouter.post("/", (req, res, next) => {
    const survey = new Survey(req.body);
    //only post if admin
    
    survey.user = req.user._id;
    survey.save(function (err, newSurvey) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newSurvey);
    });
});

surveyRouter.get("/:surveyId", (req, res, next) => {
    //if admin get by survey ID else get wiht user id?
    Survey.findOne({ _id: req.params.surveyId, user: req.user._id }, (err, survey) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!survey) {
            res.status(404)
            return next(new Error("No survey found."));
        }
        return res.send(survey);
    });
});

surveyRouter.put("/:surveyId", (req, res, next) => {
    Todo.findOneAndUpdate(
        { _id: req.params.surveyId, user: req.user._id },
        req.body,
        { new: true },
        (err, survey) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(survey);
        }
    );
});

surveyRouter.delete("/:surveyId", (req, res, next) => {
    //only delete if admin
    Survey.findOneAndRemove({ _id: req.params.surveyId, user: req.user._id }, (err, survey) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(survey);
    });
});

module.exports = surveyRouter;