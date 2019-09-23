const express = require("express");
const surveyRouter = express.Router();
const Survey = require("./models/survey.js");

surveyRouter.get("/", (req, res, next) => {
    Survey.find({ user: req.user._id }, (err, Surveys) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(surveys);
    });
});

surveyRouter.post("/", (req, res, next) => {
    const survey = new Survey(req.body);
    survey.user = req.user._id;
    survey.save(function (err, newSurvey) {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newSurvey);
    });
});

surveyRouter.get("/:surveyid", (req, res, next) => {
    Survey.findOne({ _id: req.params.surveyid, user: req.user._id }, (err, survey) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!todo) {
            res.status(404)
            return next(new Error("No Survey item found."));
        }
        return res.send(survey);
    });
});

surveyRouter.put("/:surveyId", (req, res, next) => {
    Survey.findOneAndUpdate(
        { _id: req.params.surveyId, user: req.user._id },
        req.body,
        { new: true },
        (err, todo) => {
            if (err) {
                console.log("Error");
                res.status(500);
                return next(err);
            }
            return res.send(Survey);
        }
    );
});

surveyRouter.delete("/:surveyId", (req, res, next) => {
    Survey.findOneAndRemove({ _id: req.params.surveyId, user: req.user._id }, (err, survey) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(Survey);
    });
});

module.exports = surveyRouter;
