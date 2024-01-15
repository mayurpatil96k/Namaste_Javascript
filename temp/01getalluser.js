var express = require('express');
var app = express();
var fs = require("fs");
var path = require("path");

app.get('/', function (req, res) {
   var filePath = path.join(__dirname, "dem.html");
   res.sendFile(filePath);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})