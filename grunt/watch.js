/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */

module.exports = {
  options: {
    livereload: true
  },

  scripts: {
    files: 'assets/src/**/*.js',
    tasks: ['concat:js', 'sync']
  },

  html: {
    files: 'assets/src/**/*.html',
    tasks: ['sync']
  },

  sass: {
    files: 'assets/src/**/*.scss',
    tasks: ['prepareStyles', 'sync']
  },

  livereload: {
    options: {livereload: true},
    files: ['.tmp/public/**/*']
  }
};
