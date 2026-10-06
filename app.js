const http = require('http')
const express = require('express')
const server = http.createServer()
const app = express()

app.get('/', function (req, res) {
	res.sendFile('index.html', {root: __dirname});
});

server.on('request', app);
server.listen(3000, function() {
	console.log("Server started on port 3000");
});

