//testing pull request builder 123ssdlkfnlskfn'sdklfnsdklfnskldfnsdklfnsd'lkfns'lkfnsldkfnsklfnlskdfnsklafn
//Adding new comments
require('marko/node-require').install();
require("node-jsx").install({ extension: ".jsx" });

var express = require('express');
var app = express();

app.get('/', require('./src/pages'));

app.listen(8080);
console.log('App listening on port %d', 8080);
