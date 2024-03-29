const host = "localhost"
const port = 8000;

const fs = require('fs')
const path = require("path")
const morgan = require('morgan')
const express = require("express"),
    app = express();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'));

// static file serving
app.use(express.static(path.join(__dirname, 'public')));
//setting view engine to ejs
app.set("view engine", "ejs");

// ROUTERS
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/add", function (req, res) {
    res.render("add");
});
app.get("/edit", function (req, res) {
    res.render("edit");
});


app.listen(port, function () {
    console.log(`Server is running on http://${host}:${port}`);
});