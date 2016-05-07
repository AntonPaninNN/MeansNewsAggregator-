/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .config(['$routeProvider',
        function ($routeProvider) {
            //todo move to templateCache like that $templateCache.get('news-feed')
            //todo or probably to ui router
            $routeProvider
                .when('/news-feed', {
                    templateUrl: 'src/news-feed/news-feed.tmpl.html',
                    controller: 'NewsFeedCtrl',
                    controllerAs: 'feedCtrl'
                })
                .when('/auth', {
                    templateUrl: 'src/authentication/auth.tmpl.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'authCtrl'
                })
                .when('/settings', {
                    templateUrl: 'src/settings/user-settings.tmpl.html',
                    controller: 'UserSettingsCtrl',
                    controllerAs: 'settingsCtrl'
                })
                .when('/search-results', {
                    templateUrl: 'src/search/search-results.tmpl.html',
                    controller: 'SearchResultsCtrl',
                    controllerAs: 'searchCtrl'
                })
                .otherwise({
                    redirectTo: '/news-feed'
                });
        }]);
