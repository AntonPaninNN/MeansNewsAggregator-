/**
 * Created by hartex
 */

module.exports = {
  options: {
    outputStyle: 'compressed',
    sourceMap: true,
    precision: 5
  },
  dist: {
    files: {
      'target/main.css': 'assets/styles/main.scss'
    }
  }
};
