"use strict";
exports.__esModule = true;
var http_1 = require("http");
var app_1 = require("./app");
var server = http_1.createServer(app_1["default"]);
var HOST = "0.0.0.0";
var PORT = 4400;
server.listen(PORT, function () {
    process.stdout.write("Server start listen on " + HOST + ":" + PORT + " \n");
});
