'use strict';

/* Services */



var myAppServices = angular.module('myAppServices', ['ngResource']);        // Services Module

// $Phone Service
myAppServices.factory('Phone', ['$resource', function ($resource) {
    return $resource('phones/:phoneId.json',{},{
        query :{
            method : 'GET',
            params : {
                phoneId : 'all'
            },
            isArray : true
        }
    });
}]);

// Review Services
myAppServices.factory('Review',['$resouce',function($resource){

}]);


myAppServices.factory('AuthService', ['$scope',function($scope){

}]);