const cool = require("cool-ascii-faces");
const main = require("./main");
const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => res.send(cool()));

app.post("/", function (req, res) {
    res.json(main(req.body));
});

module.exports = app;
