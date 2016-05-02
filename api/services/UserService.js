/* User Service */

module.exports = {

	createUser: function(user, next) {
		User.create(user).exec(function(err, user) {
			if (err) throw err;
			next(user);
		});
	},

	login: function(eml, pass, next) {
		User.find({email : eml, password : pass}).exec(function(err, users) {
			if (err) throw err;
			next(users);
		});
	}

};