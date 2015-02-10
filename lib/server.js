var http = require("http");
var url = require("url");

function start(route, handle) {
  // from page 35 of "The Node Beginner Book"
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response, request);

    /*
    request.setEncoding("utf8");

    request.addListener("data", function (postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '" +
        postDataChunk + "'.");
    });

    request.addListener("end", function () {
      console.log("in server.js  addListener end");
      console.log("postData = " + postData);
      route(handle, pathname, response, postData);
    });
    */

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started on port 8888");
}

exports.start = start;


var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  switch(req.url) {
    case '/first_route':
      res.write('wow, first route\n');
      break;
    case '/second_route':
      res.write('wow, second route\n');
      break;
    default :
      res.write('did not hit a route\n');
  }


  res.end('such http\n');
});

server.listen(3000);
