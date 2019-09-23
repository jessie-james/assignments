const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 3742;

require("dotenv").config();

app.use("/", express.json())
app.use("/api", expressJwt({ secret: process.env.SECRET }));

mongoose.connect("mongodb://localhost:27017/moodtracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        console.log("Connected to the moodtracker db");
    }
);

app.use("/auth", require("./routes/auth"));
app.use('/survey', require("./routes/moodsurvey"));


app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
