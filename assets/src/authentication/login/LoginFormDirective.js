/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaLoginForm', ['$log', '$templateCache', function ($log, $templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'src/authentication/login/login-form.tmpl.html',
            //transclude: true,
            replace: true,
            /*scope: {
             isDataLoading: "@isDataLoading"
             },*/

            /*link: function link(scope, element, attrs, controller, transcludeFn) {

             }*/
        };
    }]);