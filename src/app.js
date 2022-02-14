const main = require("./main");
const express = require("express");
const app = express();
app.use(express.json());

app.post("/", function (req, res) {
    res.json(main(req.body));
});

module.exports = app;
