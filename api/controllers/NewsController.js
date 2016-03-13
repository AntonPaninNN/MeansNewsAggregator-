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
		var news = {
			title: req.param('title'),
			intro: req.param('intro'),
			textUrl: req.param('texturl'),
			pictureUrl: req.param('pictureurl')
		};
		NewsService.setNews(news, function(success) {
			res.json(success);
		});
	}	
};

