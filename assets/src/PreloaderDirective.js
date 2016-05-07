angular
    .module("news-aggregator-app")
    .directive('mnaPreloader', ['$log', function($log) {
        return {
            restrict: 'E',
            template: '<img src="img/preloader.gif"/>',
            //transclude: true,
            replace: true,
            scope: {
                isDataLoading: "@isDataLoading"
            },
            link: function link(scope, element, attrs, controller, transcludeFn) {
                scope.$watch("isDataLoading", function(newValue){
                  var $j = angular.element;
                    if (newValue === "true"){
                        $j(element[0]).show();
                    } else {
                        $j(element[0]).hide();
                    }
                });
            }
        };
    }]);
