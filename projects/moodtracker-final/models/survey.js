const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Survey", survyeSchema);