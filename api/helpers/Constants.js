/* Constants */

module.exports = Object.freeze({
	GLOBAL_DATA_FILE: '/data',
	VERIFICATION_EMAIL_SUBJECT: 'Email Confirmation',
	getVerificationBody: function(email) {
		return 'Please confirm the Means News Aggregator registration by clicking <a href="' + 
			email + '">' + email + '</a>';
	}
});