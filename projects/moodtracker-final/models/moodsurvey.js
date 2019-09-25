const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    moodQuestion: {
        type: Array,
    },
    extraQuestion: {
        type: Array,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Theripist",
        required: true,
    }

});

module.exports = mongoose.model("MoodSurvey", surveySchema);