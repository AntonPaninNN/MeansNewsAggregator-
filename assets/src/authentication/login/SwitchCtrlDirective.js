/**
 * Created by hartex
 */

angular
    .module("news-aggregator-app")
    .directive('switchCtrl', [function () {
        return {
            restrict: 'A',
            transclude: true,
            link: function link(scope, element, attrs, controller, transcludeFn) {

            }
        }
    }]);