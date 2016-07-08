/* Verification Controller */

module.exports = {

	verifyEmail: function(req, res) {
		var confId = req.param('id');
		VerificationService.verifyEmail(confId, function(isOk) {
			if (isOk)
				res.view('emailVerify');
			else
				res.json('Fail');
		});
	}

};