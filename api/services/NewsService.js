/* News Service */

module.exports = {

	getAllNews: function(next) {
		News.find().exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	getNews: function(next, from, limit) {
		News.find().sort({createdAt: 'desc'}).skip(from).limit(limit).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	setNews: function(news, next) {
		News.create(news).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	}
};