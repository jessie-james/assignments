const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 3874;

require("dotenv").config();

app.use("/api", expressJwt({ secret: process.env.SECRET }));

// mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/moodtracker",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the moodtracker");
    }
);

app.use("/auth", require("./routes/auth"));
app.use("/api/survey", require("./routes/survey"));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
