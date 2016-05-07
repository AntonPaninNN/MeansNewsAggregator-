/**
 * `uglify`
 *
 * ---------------------------------------------------------------
 *
 * Minify client-side JavaScript files using UglifyJS.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-uglify
 *
 */

// todo haven't changed that task yet
module.exports = {
  dist: {
    src: ['.tmp/public/concat/production.js'],
    dest: '.tmp/public/min/production.min.js'
  }
};
