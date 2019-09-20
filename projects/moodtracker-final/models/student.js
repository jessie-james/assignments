const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const studentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    paitentcode: String,

});

studentSchema.pre("save", function (next) {
    const student = this;
    if (!student.isModified("password")) return next();
    bcrypt.hash(student.password, 10, (err, hash) => {
        if (err) return next(err);
        student.password = hash;
        next();
    });
});

studetnSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};
// is this where i check the user and can change the linking
studentSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("Student", studentSchema);