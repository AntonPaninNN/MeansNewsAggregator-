/**
 * `sync`
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `assets` folder to `.tmp/public`,
 * smashing anything that's already there.
 *
 * This task synchronizes one directory with another (like rsync).
 * In the default Sails asset pipeline, it plays very similar role
 * to `grunt-contrib-copy`, but copies only those files that have
 * actually changed since the last time the task was run.
 *
 * For usage docs see:
 *   https://github.com/tomusdrw/grunt-sync
 *
 */

module.exports = {
  //we should sync everything except js and scss
  main: {
    files: [{
      cwd: './assets',
      src: [
        '**', /* Include everything */
        '!**/*.js', /* but exclude js files */
        '!**/*.scss' /* and scss files */
      ],
      dest: '.tmp/public'
    }],
    failOnError: true,
    verbose: true
  }
  
};
