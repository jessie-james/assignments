const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
const PORT = process.env.PORT || 3344;
const path = require("path")

require("dotenv").config();

app.use("/", express.json())
app.use("/api", expressJwt({ secret: process.env.SECRET || "fuck this shit" }));
app.use(express.static(path.join(__dirname, "client", "build")))


// app.use("/auth", require("./routes/auth"));
// app.use("/api/survey", require("./routes/moodsurvey"));
// app.use("/api/client", require("./routes/client"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/moodtracker",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     (err) => {
//         if (err) throw err;
//         console.log("Connected to the moodtracker db");
//     }
// );

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
