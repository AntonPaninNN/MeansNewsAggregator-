# MeansNewsAggregator

It is a News Aggregator App written using so called MEANS stack (MongoDB, Express.js, Angular.js, Node.js and Sails.js)
<br/>
<b><i>Technologies used:</i></b>
* <b>Grunt.js:</b> as a main task runner (to do things like concatenating js and css files, compile scss and so on).
* <b>SASS:</b> as CSS preprocessor (we prefer SCSS syntax).
* <b>Bower and NPM:</b> for managing client and server side dependencies respectively.
* <b>Angular.js:</b> as a main front-end framework for building SPA.
* <b>PureCSS:</b> for base styling and adaptive grid.
* <b>Font-Awesome:</b> for iconic font.
* <b>Sails.js:</b> as a server side framework (Sails uses Express.js and Waterline ORM underneath)
* <b>MongoDB:</b> as main data storage.
<br/>

### Run the application

To run that application:
1. Clone that repository using [git](https://git-scm.com/):
```
git clone https://github.com/FullStackNN/MeansNewsAggregator-.git
cd MeansNewsAggregator-
```

2. Install Node dependencies by running:
```
npm install
```
([npm](https://www.npmjs.com/) should already be installed on your computer)

3. Install front-end dependencies by running:
```
bower install
```

4. Run:
```
sails lift
```
and browse an app running on http://localhost:1337/index.html#/
