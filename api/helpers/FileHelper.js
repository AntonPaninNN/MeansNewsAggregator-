/* File Utils */

module.exports = {

		readFile: function(filePath, next) {
			var appRoot = process.cwd();
			var fs = require('fs');
			fs.readFile(appRoot + filePath, 'utf8', function(err, data) {
					if (err) throw err;
					next(data);
				});
			}
		};