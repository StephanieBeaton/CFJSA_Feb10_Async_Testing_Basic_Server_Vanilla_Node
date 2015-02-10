/*
===================================================================
  due Feb 10, 2015   Tuesday

===================================================================
Async Testing and Basic Http Server in Vanilla Node.
Due Feb 10 by 11:59pm  Points 10  Submitting a website url
For this assignment you should write an http server
 in vanilla node that responds to several different routes.

The server should respond to a request to /time
 that will send back the current time of the server.

It should also respond to a get request to /greet/name
 where name is any single word string.
 It should send back a string that greets that name.

There should be tests using chaiHTTP for both routes,
 as well as a Gruntfile/package.json

Rubric:
Tests: 4pts
Routes: 4pts
Organization and Gruntfile/package.json 2pts
===================================================================
*/

var server = require("./lib/server");
var router = require("./lib/router");
var requestHandlers = require("./lib/requestHandlers");

var handle = {};
handle["/"]           = requestHandlers.greetName;
handle["/greet/name"] = requestHandlers.greetName;
handle["/greet/namereply"] = requestHandlers.greetNameReply;
handle["/time"]       = requestHandlers.time;

server.start(router.route, handle);
