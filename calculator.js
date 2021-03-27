const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = (weight * 100 * 100) / (height * height);
    res.send("Your BMI is " + Math.round(bmi));
});

app.listen(3000, function () {
    console.log("Server started at 3000");
});