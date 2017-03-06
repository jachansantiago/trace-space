var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/www'));


/*
	Enable CORS on server
*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

console.log("Server is listening in port", port);
app.listen(port);
