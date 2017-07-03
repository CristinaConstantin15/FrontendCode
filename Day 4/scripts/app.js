var hrApp = angular.module('hrApp', ['ngRoute']);

// TODO #3 add default route for main page
hrApp.config(['$routeProvider',
    function($routeProvider) {
        "use strict";
        $routeProvider.when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
    })
    .when('/forms', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
    });
}]);
