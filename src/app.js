"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var compression = require("compression");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var express = require("express");
var helmet = require("helmet");
var methodOverride = require("method-override");
var morgan = require("morgan");
var app = express();
app.locals.siteName = "TS Express Boilerplate";
// 3rd party middleware
app
    .use(cors()) // to enable cross-origin
    .use(helmet()) // to enable security for headers
    .use(bodyParser.json()) // to support JSON-encoded bodies
    .use(bodyParser.urlencoded({ extended: true })) // to support URL-encoded bodies
    .use(methodOverride()) // lets you use HTTP verbs such as PUT or DELETE
    .use(cookieParser()) // to accept any cookies if needed
    .use(compression())
    .use(morgan("combined"));
app
    .use("/api/v3", function (req, res) {
    res.send("OK");
});
exports["default"] = app;
