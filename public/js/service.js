'use strict';

/* Services */


var myAppServices = angular.module('myAppServices', ['ngResource']);        // Services Module

// Brand Service
myAppServices.factory('Brand',['$resource',function($resource){

}]);

// Phone Service
myAppServices.factory('Phone', ['$resource', function ($resource) {
    return $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {
                phoneId: 'all'
            },
            isArray: true
        }
    });
}]);

// Review Services
myAppServices.factory('Review', ['$resource', function ($resource) {
    return $resource('reviews/:reviewId.json', {}, {
        query: {
            method: 'GET',
            params: {
                reviewId: 'all'
            },
            isArray: true
        }
    });
}]);

myAppServices.factory('AuthService', ['$scope', function ($scope) {

}]);