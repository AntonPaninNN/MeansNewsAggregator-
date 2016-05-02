/**
 * NewsController
 *
 * @description :: Server-side logic for managing News
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getAllNews: function(req, res) {
		NewsService.getAllNews(function(news) {
			res.json(news);
		});
	},

	getNews: function(req, res) {
		var from = req.param('from');
		var limit = req.param('limit');
		NewsService.getNews(function(news) {
			res.json(news);
		}, from, limit);
	},

	setNews: function(req, res) {
		var crypto = require('crypto');
		var news = {
			id: crypto.randomBytes(20).toString('hex'),
			title: req.param('title'),
			intro: req.param('intro'),
			text: req.param('text'),
			pictureUrl: req.param('pictureurl')
		};
		NewsService.setNews(news, function(success) {
			res.json(success);
		});
	},	

	deleteAllNews: function(req, res) {
		NewsService.deleteAllNews(function(result) {
			res.json(result);
		});
	}
};

