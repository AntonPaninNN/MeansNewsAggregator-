/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    id: {
      type: 'string',
      required: true,
      unique: true
    },

    link: {
      type: 'string'
    },

  	title: {
  		type: 'string'
  	},

  	intro: {
  		type: 'string'
  	},

  	text: {
  		type: 'string'
  	},
    
  	pictureUrl: {
  		type: 'string'
  	},

    pubDate: {
      type: 'datetime'
    },

    author: {
      type: 'string'
    }
  }
};

