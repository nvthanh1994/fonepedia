'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'myAppCtrls',
    'myAppServices',
    'angucomplete'
]);
myApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', { // home
                templateUrl: 'views/partials/home.html',
                controller: 'HomeCtrl',					// Controller for Review, News, RankList, ...
                title: 'Welcome'
            }).
            when('/brands', {
                templateUrl: 'views/partials/brand-list.html',
                controller: 'BrandListCtrl',
                title: 'All Brand'
            }).
            when('/brands/:brandId', {
                templateUrl: 'views/partials/brand-detail.html',
                controller: 'BrandDetailCtrl',
                title: 'Brand Detail'
            }).
            // PhoneListCtrl sử dụng cho chức năng Quick Search
            when('/phones', {		// list all fone and some filter (brand, specs, ...
                templateUrl: 'views/partials/phone-list.html',
                controller: 'PhoneListCtrl',
                title: 'All Phones'
            }).
            when('/phones/:phoneId', {		// fone detail
                templateUrl: 'views/partials/phone-detail.html',
                controller: 'PhoneDetailCtrl',
                title: 'Phone Detail'
            }).
            when('/reviews', {
                templateUrl: 'views/partials/review-list.html',
                controller: 'ReviewListCtrl',
                title: 'All Reviews'
            }).
            when('/reviews/:reviewId', {
                templateUrl: 'views/partials/review-detail.html',
                controller: 'ReviewDetailCtrl',
                title: 'Review Detail'
            }).
            when('/contact', {		// contact staff
                templateUrl: 'views/partials/contact.html',
                title: 'Contact us'
            }).
            when('/faq', {
                templateUrl: 'views/partials/faq.html',
                title: 'FAQ'
            }).
            when('/dashboard', {		                // admin dashboard
                templateUrl: 'views/partials/dashboard.html',
                controller: 'DashboardCtrl',                 // Add news, reviews, ...
                title: 'Admin Dashboard - Secret'
            }).
            when('/dashboard/phones', {
                templateUrl: 'views/partials/dashboard-phone.html',
                controller: 'DashboardCtrl',
                title: 'Phone Management'
            }).
            when('/dashboard/reviews', {
                templateUrl : 'views/partials/dashboard-review.html',
                controller : 'DashboardCtrl',
                title : 'Review Management'
            }).
            otherwise({
            redirectTo: '/'
        });
        // $locationProvider.html5Mode(true);
    }

]);

myApp.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
