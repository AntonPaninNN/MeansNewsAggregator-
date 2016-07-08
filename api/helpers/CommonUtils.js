/* Common Utils */

var crypto = require('crypto');

module.exports = {

	generateVerificationUrl: function() {
		return 'http://localhost:1337/check?id=' + crypto.randomBytes(20).toString('hex');
	},

	generateVerificationUrlById: function(id) {
		return 'http://localhost:1337/check?id=' + id;
	},

	generateId: function() {
		return crypto.randomBytes(20).toString('hex');
	}

};