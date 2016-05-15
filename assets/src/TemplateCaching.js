/**
 * Created by hartex
 */

angular
  .module("news-aggregator-app")
  .run(["$templateCache", "$http", '$log', function ($templateCache, $http, $log) {
    var templates = [
      'src/authentication/login/login-form.tmpl.html',
      'src/authentication/registration/registration-form.tmpl.html',
      'src/authentication/auth.tmpl.html',
      'src/menu/menu.tmpl.html',
      'src/news-feed/news-feed.tmpl.html',
      'src/search/search-results.tmpl.html',
      'src/settings/user-settings.tmpl.html',
      'src/news/news.tmpl.html'
    ];

    for (var i = 0; i < templates.length; i++) {
      $http.get(templates[i]).then(
        function (response) {
          $templateCache.put(i, response.data);
        },
        function (response) {
          $log.error('Something went wrong during loading template ' + key + ' Response: ' + response);
        });
    }
  }]);
