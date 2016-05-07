/**
 * Created by hartex
 */
angular
    .module("news-aggregator-app")
    .directive('mnaRegistrationForm', ['$log', '$templateCache', function ($log, $templateCache) {
        return {
            restrict: 'E',
            templateUrl: 'src/authentication/registration/registration-form.tmpl.html',
            replace: true
        };
    }]);