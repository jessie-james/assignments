const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const clientSchema = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    clientImg:String,
    clientName: {
        type: String,
        required: true,
    },
    clientphoneNum: String,
    clientCode: {
        type: String,
        unique: true,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

// clientSchema.pre("save", function (next) {
//     const client = this;
//     if (!client.isModified("clientCode")) return next();
//     bcrypt.hash(client.clientCode, 10, (err, hash) => {
//         if (err) return next(err);
//         client.clientCode = hash;
//         next();
//     });
// });

// clientSchema.methods.checkClientCode = function (codeAttempt, callback) {
//     bcrypt.compare(codeAttempt, this.clientCode, (err, isMatch) => {
//         if (err) return callback(err);
//         callback(null, isMatch);
//     });
// };

clientSchema.pre("save", function (next) {
    const client = this;
    if (!client.isModified("password")) return next();
    bcrypt.hash(client.password, 10, (err, hash) => {
        if (err) return next(err);
        client.password = hash;
        next();
    });
});

clientSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};


// clientSchema.methods.withoutclientCode = function () {
//     const client = this.toObject();
//     delete client.clientCode;
//     return client;
// };

clientSchema.methods.withoutPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("Client", clientSchema);