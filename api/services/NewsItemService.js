module.exports = {
	
	getNewsItems: function(next) {
		NewsItem.find().exec(function(err, newsitem) {
			if(err) throw err;
			next(newsitem);
		});
	},

	addNewsItems: function(val, next) {
    NewsItem.create({value: val}).exec(function(err, newsitem) {
      if(err) throw err;
      next(newsitem);
    });
  }
  
};