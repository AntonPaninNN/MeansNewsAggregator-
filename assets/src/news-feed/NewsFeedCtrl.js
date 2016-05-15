/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .controller('NewsFeedCtrl', ["NewsService", "$log", "$timeout",
        function (NewsService, $log, $timeout) {
            var self = this;

            self.newsFromWS = [];
            self.showWSButton = false;

            function subscribeToWS() {
                var socketIO = NewsService.establishWSConnection();
                socketIO.on('newNews', function (data) {
                    self.newsFromWS.push(data);
                    self.showWSButton = true;
                    $log.log(self.newsFromWS);
                    $log.log(self.showWSButton);
                });
            }

            self.showWSNews = function () {
                self.allNews.unshift(self.newsFromWS);
                self.newsFromWS.splice(0, newsFromWS.length);
                self.showWSButton = false;
            };

            function loadNews() {
                self.isDataLoading = true;
                NewsService.getAllNews()
                    .then(function (newsData) {
                            self.isDataLoading = false;
                            self.allNews = newsData;
                        });
            }

            subscribeToWS();
            loadNews();
        }]);