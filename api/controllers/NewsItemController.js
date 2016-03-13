/**
 * NewsItemController
 *
 * @description :: Server-side logic for managing Newsitems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getNewsItem: function(req, res) {
		NewsItemService.getNewsItems(function(newsitem) {
			res.json(newsitem);
		});
	},
	
	addNewsItem: function(req, res) {
        var val = 'FUCCCKKK!';
        NewsItemService.addNewsItems(val, function(success) {
            res.json(success);
        });
    }

};

