/* News Service */

module.exports = {

	getAllNews: function(next) {
		News.find().sort({pubDate: 'desc'}).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	getNews: function(next, from, limit) {
		News.find().sort({pubDate: 'desc'}).skip(from).limit(limit).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	setNews: function(news, next) {
		News.create(news).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	checkNews: function(lnk, next) {
		News.find({link : lnk}).exec(function(err, news) {
			next(news.length);
		});
	},

	deleteAllNews: function(next) {
		News.destroy({}).exec(function(err) {
			if (err) throw err;
			next('OK');
		});
	}
};