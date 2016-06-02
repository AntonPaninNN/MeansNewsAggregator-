/* News Service */

module.exports = {

	getAllNews: function(next) {
		News.find().sort({pubDate: 'desc'}).exec(function(err, news) {
			if (err) throw err;
			news.forEach(function(item, i, news) {
				delete item.text;
			});
			next(news);
		});
	},

	getLastNews: function(next, tId, limit) {
		News.find({id: tId}).exec(function(err, news) {
			var idPubDate = news[0].pubDate;
			News.find({pubDate: {'<': idPubDate}}).sort({pubDate: 'desc'}).limit(limit).exec(function(err, news) {
				if (err) throw err;
				news.forEach(function(item, i, news) {
					delete item.text;
				});
				next(news);
			});
		});
	},	

	getNewsText: function(next, tId) {
		News.find({id: tId}).exec(function(err, news) {
			if (err) throw err;
			next(news);
		});
	},

	getNews: function(next, from, limit) {
		News.find().sort({pubDate: 'desc'}).skip(from).limit(limit).exec(function(err, news) {
			if (err) throw err;
			news.forEach(function(item, i, news) {
				delete item.text;
			});
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