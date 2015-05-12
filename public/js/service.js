'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', ['ngResource']);        // Services Module

// Brand Service
myAppServices.factory('Brand', ['$resource', function ($resource) {
    return $resource('v1/api/brand/:brandId', {}, {
        query: {
            method: 'GET',
            params: {
                brandId: ''
            }
        }
    });
}]);

// Phone Service
myAppServices.factory('Phone', ['$resource', function ($resource) {
    return $resource('v1/api/phone/:phoneId', {}, {
        query: {
            method: 'GET',
            params: {
                phoneId: ''
            }
        }
    });
}]);

// Review Services
myAppServices.factory('Review', ['$resource', function ($resource) {
    return $resource('v1/api/review/:reviewId', {}, {
        query: {
            method: 'GET',
            params: {
                reviewId: ''
            }
        }
    });
}]);

// Image Service
myAppServices.factory('Image', ['$resource', function ($resource) {
    return $resource('/v1/api/image/:phoneId', {}, {
        'get': {
            method: 'GET',
            //transformResponse: function (data) {return angular.fromJson(data).list},
            //isArray: true //since your list property is an array
        }
    });
}]);

// New Service
myAppServices.factory('New',['$resource',function($resource){
    return $resource('v1/api/new/:newId', {}, {
        query: {
            method: 'GET',
            params: {
                reviewId: ''
            }
        }
    });
}]);

myAppServices.factory('StorageService', ['$rootScope', function ($rootScope) {
    return {
        get: function (key) {
            return localStorage.getItem(key);
        },
        save: function (key, data) {
            localStorage.setItem(key, JSON.stringify(data));
        },
        remove: function (key) {
            localStorage.removeItem(key);
        },
        clearAll: function () {
            localStorage.clear();
        }
    }
}]);