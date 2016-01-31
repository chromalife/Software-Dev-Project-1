console.log("Hello from server");
//loading express
var express = require('express');
var express = require('mongojs');
var db = mongojs("firstDB, []");

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);