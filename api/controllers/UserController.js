/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var common = require('../helpers/CommonUtils.js');

module.exports = {
	
	createUser: function(req, res) {
		var user = { 
			username: req.param('username'),
			email: req.param('email'),
			password: req.param('pass'),
			confirmId: common.generateId(),
			isConfirmed: false
		};
		UserService.createUser(user, function(user) {
			res.json(user);
		});
	},

	login: function(req, res) {
		var email = req.param('email');
		var pass = req.param('pass');
		UserService.login(email, pass, function(users) {
			res.json(users);
		});
	},

	sendVerificationEmail: function(req, res) {
		var email = req.param('email');
		UserService.sendVerificationEmail(email, function(user) {
			res.json(user);
		});
	},

	deleteAllUsers: function(req, res) {
		UserService.deleteAllUsers(function(result) {
			res.json(result);
		});
	}

};

