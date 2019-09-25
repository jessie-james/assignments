const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    moodQuestion: {
        type: Array,
        required: true,
    },
    extraQuestion: {
        type: Array,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Theripist",
        required: true,
    }

});

module.exports = mongoose.model("MoodSurvey", surveySchema);