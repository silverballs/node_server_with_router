var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "Text/plain"});
	response.write("Hello World");
	response.end();

}).listen(8888);

 http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;