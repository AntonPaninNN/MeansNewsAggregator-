/* Socket Service */

module.exports = {

	createSocket: function() {
		var io = require('socket.io');
		var http = require('http');
		var app = http.createServer();
		var io = io.listen(app);
		app.listen(3000);
		sockIo = io;
	}

};