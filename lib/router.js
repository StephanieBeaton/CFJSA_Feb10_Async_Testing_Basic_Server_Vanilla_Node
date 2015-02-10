var requestHandlers = require("./requestHandlers");

function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);

  // correction needed here. either switch or if then elses
  if (pathname == "/time") {
    requestHandlers.time(response, request);
  } else {
    var dirs = pathname.split("/");

    if ((dirs.length == 3) && (dirs[1] == "greet")) {
      requestHandlers.greetName(response, request, dirs[2]);
    } else {
      console.log("No request handler found for " + pathname);
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not found");
      response.end();
    }
  }

}

exports.route = route;
