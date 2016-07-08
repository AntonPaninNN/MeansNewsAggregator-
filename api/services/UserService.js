/* User Service */

var EmailHelper = require('../helpers/EmailHelper.js');
var constants = require('../helpers/Constants.js');
var common = require('../helpers/CommonUtils.js');

module.exports = {

	createUser: function(user, next) {
		User.create(user).exec(function(err, user) {
			if (err) throw err;
			EmailHelper.sendEmail(user.email, constants.VERIFICATION_EMAIL_SUBJECT, 
				constants.getVerificationBody(common.generateVerificationUrlById(user.confirmId)));
			next('OK');
		});
	},

	login: function(eml, pass, next) {
		User.find({email : eml, password : pass}).exec(function(err, users) {
			if (err) throw err;
			if (users.length != 1)
				next('There is no any user with this email');
			else {
				if (users[0].isConfirmed != true)
					next('This user account isn\'t confimed yet');
				else
					next('OK');
			}
		});
	},

	sendVerificationEmail: function(eml, next) {
		User.find({email : eml}).exec(function(err, users) {
			if (err) throw err;
			if (users.length == 1) {
				EmailHelper.sendEmail(users[0].email, constants.VERIFICATION_EMAIL_SUBJECT, 
					constants.getVerificationBody(common.generateVerificationUrlById(users[0].confirmId)));
				next('OK');
			}
			else
				next('There is no any user with this email');
		});
	},

	deleteAllUsers: function(next) {
		User.destroy({}).exec(function(err) {
			if (err) throw err;
			next('OK');
		});
	}

};