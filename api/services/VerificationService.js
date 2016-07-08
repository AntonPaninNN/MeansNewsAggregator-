/* Verification Servise */

module.exports = {

	verifyEmail: function(id, next) {
		User.update({
			confirmId: id
		}, {
			isConfirmed: true
		}).exec(function(err, users) {
			if (err || users.length != 1) {
				console.log('Not just single user udated!');
				next(false);
			} else {
				console.log('Updated user: ' + users[0].username); 
				next(true);
			}
		});
	}

};