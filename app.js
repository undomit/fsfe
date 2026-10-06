const http = require('http')
const app = require('express')

http.createServer(function (req, res) {
	res.write('On the way of becoming a full stack engineer!');
	res.end();
}).listen(3000);

console.log("Server started on port 3000");

