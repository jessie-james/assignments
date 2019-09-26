const express = require("express");
const surveyRouter = express.Router();
const MoodSurvey = require("../models/moodsurvey.js");

surveyRouter.get("/", (req, res, next) => {
    MoodSurvey.find({ user: req.user._id }, (err, surveys) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(surveys);
    });
});
// surveyRouter.get("/:clientcode", (req, res, next) => {
//     MoodSurvey.find({ user: req.user._id }, (err, surveys) => {
//         if (err) {

surveyRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const survey = new MoodSurvey(req.body);
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
    MoodSurvey.findOne({ _id: req.params.surveyid, user: req.user._id }, (err, survey) => {
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
    MoodSurvey.findOneAndUpdate(
        { _id: req.params.surveyId, user: req.user._id },
        req.body,
        { new: true },
        (err, survey) => {
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
    MoodSurvey.findOneAndRemove({ _id: req.params.surveyId, user: req.user._id }, (err, survey) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(survey);
    });
});

module.exports = surveyRouter;