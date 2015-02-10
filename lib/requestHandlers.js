/*
======================================================
The server should respond to a request to /time
 that will send back the current time of the server.

It should also respond to a get request to /greet/name
 where name is any single word string.
 It should send back a string that greets that name.
======================================================
*/

/*
handle["/"]           = requestHandlers.greetName;
handle["/greet/name"] = requestHandlers.greetName;
handle["/greet/namereply"] = requestHandlers.greetNameReply;
handle["/time"]       = requestHandlers.time;
*/

var querystring = require("querystring"),
  fs = require("fs"),
  url = require("url");

function time(response, postData) {
  console.log("Request handler 'time' was requested.");

  //  17:27:49 GMT-0800 (PST)  <-- Time format
  var currServerTime = new Date().toTimeString();

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    'Current Server Time = ' + currServerTime +
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

function greetName(response, request, word) {
  console.log("Request handler 'greetName' was called.");
  /*
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/greet/namereply" method="post">' +
    '<label for="name">Name:</label>' +
    '<input type="text" id="name"/>' +
    '<input type="submit" value="Get greeting" />'+
    '</body>'+
    '</html>';
  */
  console.log(word);

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Single Word String: " + word);

  response.end();
}


function greetNameReply(response, request) {
  //var pathname = url.parse(request.url).pathname;
  //console.log("Request for " + pathname + "received.");

  //var query = url.parse(request.url).query;
  //console.log("query = " + query);
  console.log("Request = " + request);

  //console.log("Request handler 'greetNameReply' was called.");
  //console.log("Request for " + pathname + "received.");
  //console.log("querystring.parse(request.url).text = " +
  //            querystring.parse(request.url).text)
  console.dir(request.url);

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello " + request);

  response.end();
}

exports.greetName = greetName;
exports.time = time;
exports.greetNameReply = greetNameReply;
