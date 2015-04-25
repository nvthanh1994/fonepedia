'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myAppCtrls',
    'myAppServices'
]);
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', { // home
                templateUrl: 'partials/home.html',
                controller: 'HomeCtrl',					// Controller for Review, News, RankList, ...
                title: 'Welcome'
            }).
            when('/phones', {		// list all fone and some filter (brand, specs, ...
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl',
                title: 'All Phones'
            }).
            when('/phones/:phoneId', {		// fone detail
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl',
                title: 'Phone Detail'
            }).
            when('/reviews',{
                templateUrl : 'partials/review-list.html',
                controller : 'ReviewListCtrl',
                title : 'All Reviews'
            }).
            when('/reviews/:reviewId',{
                templateUrl : 'partials/review-detail.html',
                controller : 'ReviewDetailCtrl',
                title : 'Review Detail'
            }).
            when('/contact', {		// contact staff
                templateUrl: 'partials/contact.html',
                title: 'Contact us'
            }).
            when('/faq', {
                templateUrl: 'partials/faq.html',
                title: 'FAQ'
            }).
            when('/admincp', {		// admin control panel
                templateUrl: 'partials/admincp.html',
                controller: 'AdminCtrl',                 // Add news, reviews, ...
                title: 'AdminCP - Secret'

            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);

myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
