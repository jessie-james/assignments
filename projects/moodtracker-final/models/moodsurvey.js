const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        lowercase: true   
    },
    completed: {
        type: Boolean,
        default: false
    },
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