const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    // patient code
    completed: {
        type: Boolean,
        default: false
    },
    mood: {
        type: Array,
    },
    extraQuestions: {
        type: Array,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "Theripist",
        required: true,
    }

});

module.exports = mongoose.model("Survey", surveySchema);