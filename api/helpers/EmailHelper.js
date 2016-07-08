/* Email Utils */

_getEmailData = function(next) {
	var FileHelper = require('./FileHelper.js');
	FileHelper.readFile('/data', function(data) {
		var array = data.toString().split("\n");
		var email;
		var pass;
		for (i in array) {
			if (array[i].split('-')[0] === 'email')
				email = array[i].split('-')[1];
			if (array[i].split('-')[0] === 'pass')
				pass = array[i].split('-')[1];
		}
		next(email, pass);
	});
};

_sendEmail = function(tos, subjects, messages) {
	_getEmailData(function(email, pass) {
		var nodemailer = require('nodemailer');
		var transporter = nodemailer.createTransport('smtps://' +
			email + ':' + pass + '@smtp.mail.yahoo.com');
		var mailOptions = {
			from: email,
			to: tos,
			subject: subjects,
			text: messages,
			html: messages
		};

		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: ' + info.response);
		});
	});
};

module.exports = {
	getEmailData: _getEmailData,
	sendEmail: _sendEmail
};