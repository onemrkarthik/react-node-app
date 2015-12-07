//testing pull request builder
require('marko/node-require').install();
require('node-jsx').install();

var express = require('express');
var app = express();

app.get('/', require('./src/pages'));

app.listen(8080);
console.log('App listening on port %d', 8080);
