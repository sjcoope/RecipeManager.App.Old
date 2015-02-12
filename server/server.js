/*jshint node:true*/
'use strict';

var express = require('express')
var app = express()
var port = process.env.PORT || 7203;

app.use(express.static('./src/'));
app.use(express.static('./'));
// All the assets are served at this point.

// Any invalid calls for templateUrls are under app/* and should return 404
app.use('/app/*', function(req, res, next) {
    four0four.send404(req, res);
});
// Any deep link calls should return index.html
app.use('/*', express.static('./src/index.html'));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});