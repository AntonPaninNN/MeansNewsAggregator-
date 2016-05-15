/**
 * Created by hartex
 */

angular
    .module("news-aggregator-app")
    .controller('NewsCtrl', ["NewsService", "$log", "$timeout", "$routeParams",
        function (NewsService, $log, $timeout, $routeParams) {
            var self = this;
            var newsId = $routeParams.newsId;
        }]);
