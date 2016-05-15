/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .factory("NewsService", ["$log", "$http",
        function ($log, $http) {
            var newsFromWS = [];
            return {

                /**
                 * @return next 10 news posts from given id
                 * */
                getNext10: function (newsID) {

                },

                /**
                 * @return news data for a given id
                 * */
                getNewsById: function (newsID) {

                },

                /**
                 * been invoked when user visit news feed for the first time
                 * @return 10 last news posts for current user
                 * */
                getInitial10: function () {

                },

                /**
                 * @return all news from database
                 * */
                getAllNews: function () {
                    var req = {
                        method: 'GET',
                        url: 'src/news-sample.json',
                        transformResponse: function (data, headers) {
                            //todo here comes data transformation, especially news text transformation
                            return JSON.parse(data);
                        }
                    };
                    return $http(req)
                        .then(function (successResp) {
                            return successResp.data.all_news;
                        }, function (errorResp) {
                            $log.error("Error while fetching news " + errorResp);
                        });
                },

                /**
                 * establishes WebSocket connection and
                 * @return ws object 
                 * */
                establishWSConnection: function () {
                    return io('ws://localhost:3000');
                }
            }
        }]);