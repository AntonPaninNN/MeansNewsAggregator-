/**
 * `concat`
 *
 * ---------------------------------------------------------------
 *
 * Concatenates the contents of multiple JavaScript and/or CSS files
 * into two new files, each located at `concat/production.js` and
 * `concat/production.css` respectively in `.tmp/public/concat`.
 *
 * This is used as an intermediate step to generate monolithic files
 * that can then be passed in to `uglify` and/or `cssmin` for minification.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-concat
 *
 */

module.exports = {
  js: {
    src: [
      'bower_components/jQuery/dist/jquery.min.js',
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js',
      // custom js
      'assets/src/**/*.js'
    ],
    dest: '.tmp/public/distr/main.js'
  },

  css: {
    src: [
      'bower_components/font-awesome/css/font-awesome.min.css',
      'bower_components/pure/pure-min.css',
      'bower_components/pure/grids-responsive-min.css',
      //custom css
      'target/main.css'
    ],
    dest: '.tmp/public/distr/main.css'
  }
  
};
