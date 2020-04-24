'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var routing = require('./routing')

http.createServer(routing.handleRequest).listen(port); 