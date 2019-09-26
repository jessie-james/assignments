const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    moodQuestion: {
        type: String,
        required: true,
    },
    extraQuestion: {
        type: String,
        required: true,
    },
    clientCode:String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("MoodSurvey", surveySchema);