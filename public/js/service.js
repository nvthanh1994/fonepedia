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