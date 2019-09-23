// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt");

// const clientSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     phoneNum:String,
//     clientCode: String,

// });

// clientSchema.pre("save", function (next) {
//     const client = this;
//     if (!client.isModified("password")) return next();
//     bcrypt.hash(client.password, 10, (err, hash) => {
//         if (err) return next(err);
//         client.password = hash;
//         next();
//     });
// });

// clientSchema.methods.checkPassword = function (passwordAttempt, callback) {
//     bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
//         if (err) return callback(err);
//         callback(null, isMatch);
//     });
// };

// clientSchema.methods.withoutPassword = function () {
//     const client = this.toObject();
//     delete client.password;
//     return client;
// };

// module.exports = mongoose.model("Client", clientSchema);