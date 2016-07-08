/* Polling Service */

var computerweekly = require('./itsites/computerweekly.js');
var request = require('request');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;
var $;
var newsCount = 0;

module.exports = {

	parseData: function(url) {
		jsdom.jQueryify(window, "http://code.jquery.com/jquery.js", function() {
			$ = window.$;
			PollingService.getRssFeedXml(url, function(parsedXml) {
				newsCount = parsedXml.rss.channel[0].item.length - 1;
					PollingService.parseItem(parsedXml);
			});
		});
	},

	getRssFeedXml: function(url, next) {
		request.get(url, function(error, request, body) {
			parser.parseString(body, function(err, parsedXml) {
				if (err) throw err;
				next(parsedXml);
			});
		});
	},

	parseItem: function(parsedXml) {
		var item = parsedXml.rss.channel[0].item[newsCount];
		var link = item.link[0];
		NewsService.checkNews(link, function(length) {
			if (length <= 0) {
				request.get(link, function(error, request, body) {
					console.log('Link2: ' + link);
					var content = $(body).find("#content-body").html();
					var matches = [];
					content.replace(/<p>(.*?)<\/p>/g, function() {
						matches.push(arguments[1]);
					});
					var finalContent = "";
					for (var member in matches) {
						finalContent += ("<p>" + matches[member] + "</p>");
					}

					var crypto = require('crypto');
					var news = {
						id: crypto.randomBytes(20).toString('hex'),
						title: item.title[0],
						intro: item.description[0],
						link: item.link[0],
						author: item.author[0],
						pubDate: new Date(item.pubDate[0]),
						siteName: computerweekly.SiteData.name,
						siteIconLink: computerweekly.SiteData.siteIconLink,
						siteLink: computerweekly.SiteData.siteLink,
						text: finalContent
					};

					//todo we probably should emit only for correct clients
					sockIo.sockets.emit('newNews', news);

					NewsService.setNews(news, function(success) {
						newsCount--;
						if (newsCount >= 0)
							PollingService.parseItem(parsedXml);
					});
				});
			}
		});
	}
};