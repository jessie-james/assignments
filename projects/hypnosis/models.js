const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    appointments: {
        firstAppointment: {
            date:Number,
            time: Number,
            program:String,
        },
        SecondeAppointment: {
            date: Number,
            time: Number,
            program: String,
        },
        thirdAppointment: {
            date: Number,
            time: Number,
            program: String,
        },
        fourthAppointment: {
            date: Number,
            time: Number,
            program: String,
        },
    }
});