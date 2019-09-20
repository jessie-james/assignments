const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const theripistSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
});

theripistSchema.pre("save", function (next) {
    const theripist = this;
    if (!theripist.isModified("password")) return next();
    bcrypt.hash(theripist.password, 10, (err, hash) => {
        if (err) return next(err);
        theripist.password = hash;
        next();
    });
});

theripistSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};
/// is this where i check the user and can change the linking
theripistSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("Theripist", theripistSchema);