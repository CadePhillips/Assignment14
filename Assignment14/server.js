const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static('public'));
app.use(express.json());
const cors = require("cors");
app.use(cors());

const upload = multer({dest: __dirname + "/images"});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let items = [{
    id:1,
    name: "Football",
    description: "Brown, pigskin",
    sport: "Football",
    madeOf: [
        "pigskin",
        "rubber",
        "air"
    ]
}]

app.listen(3000, () => {
    console.log("listening");
});

