const http = require("http");

const listener = function(req, res) {
	var parsed = req.url.split("/");
	if (parsed[1] == "x") {
		switch(parsed[2]) {
			case "aarch64": {
				break;
			};
			case "arm": {
				break;
			};
			case "armv6h": {
				break;
			};
			case "armv7h": {
				res.writeHead(200);
				res.end("vincepackages.tar.xz");
				break;
			};
			case "os": {
				// System images??
				break;
			};
		}
	} else {
		res.writeHead(404);
		res.end("Unavailable");
	}
}

const server = http.createServer(listener);
server.listen(80);
