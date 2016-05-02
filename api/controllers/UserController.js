/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	createUser: function(req, res) {
		var user = { 
			username: req.param('username'),
			email: req.param('email'),
			password: req.param('pass')
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
	}

};

