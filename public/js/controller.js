var myAppCtrl = angular.module('myAppCtrls', []);

myAppCtrl.controller('IndexCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.nfo = 'At IndexCtrl';
}]);

myAppCtrl.controller('HomeCtrl', ['$scope', function ($scope) {
    // Load ra 10 review mới nhất
    // Load ra 10 news mới nhất
    // Load ra 10 popular phones
    // Load ra 10 lastest phones
    $scope.nfo = 'At HomeCtrl';
}]);


myAppCtrl.controller('BrandListCtrl', ['$scope', 'Brand', function ($scope, Brand) {
    Brand.query().$promise.then(function (res) {
        $scope.brands = res.brand;
        console.log($scope.brands);
    });
    $scope.orderProp = 'brand_name';
}]);

myAppCtrl.controller('BrandDetailCtrl', ['$scope', '$routeParams', 'Brand', function ($scope, $routeParams, Brand) {
    Brand.get({brandId: $routeParams.brandId}).$promise.then(function (res) {
        $scope.brandphones = res.phones;
        console.log($scope.brandphones);
        for (var i = 0; i < $scope.brandphones.length; i++) {
            $scope.brandphones[i].imagesUrl = [2];
            for (var j = 0; j <= 1; j++) {
                //$scope.brandphones[i].imagesUrl[j] = './img/phones/' + $scope.brandphones[i].phone_id + '/' + j + '.jpg';
                $scope.brandphones[i].imagesUrl[j] = './img/phones/default.png';
            }
        }
    });
}]);

myAppCtrl.controller('PhoneListCtrl', ['$rootScope', '$scope', 'Phone', 'Brand', function ($rootScope, $scope, Phone, Brand) {
    $scope.orderProp = 'phone_name';
    $scope.query = $rootScope.searchquery;
    $scope.brands = Brand.query();
    Phone.query().$promise.then(function (res) {
        $scope.phones = res.phone;
        for (var i = 0; i < $scope.phones.length; i++) {
            $scope.phones[i].imagesUrl = [2];
            for (var j = 0; j <= 1; j++) {
                //$scope.phones[i].imagesUrl[j] = './img/phones/' + $scope.phones[i].phone_id + '/' + j + '.jpg';
                $scope.phones[i].imagesUrl[j] = './img/phones/default.png';
            }
        }
    });
}]);

myAppCtrl.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 'Brand', function ($scope, $routeParams, Phone, Brand) {
    Phone.get({phoneId: $routeParams.phoneId}).$promise.then(function (res) {
        $scope.phone = res.phone;
        console.log($scope.phone);

        $scope.phone.imagesUrl = [2];
        for (var i = 0; i <= 1; i++) {
            $scope.phone.imagesUrl[i] = './img/phones/' + $scope.phone.phone_id + '/' + i + '.jpg';
        }
    });
    $scope.info = 'Phone Detail Ctrl';
    $scope.brands = Brand.query();
}]);

myAppCtrl.controller('ReviewListCtrl', ['$scope', 'Review', function ($scope, Review) {
    console.log("Here");
    $scope.orderProp = 'title';
    $scope.info = "At review list";
    $scope.reviews = Review.query();
}]);

myAppCtrl.controller('ReviewDetailCtrl', ['$scope', 'Review', '$routeParams', function ($scope, Review, $routeParams) {
    $scope.info = "At review detail";
}]);


// Craft :v.
myAppCtrl.controller('DashboardCtrl', ['Phone','$route', '$timeout', '$scope', '$http', 'StorageService', '$location', function (Phone,$route, $timeout, $scope, $http, StorageService, $location) {
    $scope.user = {
        username: "",
        password: ""
    }

    // Kiểm tra key isLogined trong localStorage
    if (StorageService.get('isLogined')) {
        //console.log('have');

        if (JSON.parse(StorageService.get('isLogined')) == 1) {
            console.log('here, logined in lS');
            $scope.logined = true;
            $scope.userInfo = JSON.parse(StorageService.get('currentUser'));
        }
        else {
            console.log(StorageService.get('isLogined'));
            console.log('here, login NOT in lS');
            $scope.logined = false;
        }
    }
    else {
        StorageService.save('isLogined', '-1');
    }

    $scope.login = function () {
        $http.post('v1/api/login', $scope.user).success(function (data, status, headers, config) {
            console.log(data);
            if (data.error_code == 0) {
                StorageService.save('isLogined', "1");
                StorageService.save('currentUser', data.user.username);
                $scope.logined = true;
                $scope.userInfo = JSON.parse(StorageService.get('currentUser'));
                $location.path('dashboard');
                //console.log(data);
            }
            else {
                console.log('User doest not exist');
                StorageService.save('isLogined', "0");
            }

        }).error(function (data, status, headers, config) {
            console.log('Login error');
        });
    }
    $scope.logout = function () {
        StorageService.remove('isLogined');
        StorageService.remove('currentUser');
        $timeout(function () {
            $location.path('/dashboard');
            $route.reload();
        }, 100);
    }

    $scope.loadPhone = function(){
        Phone.query().$promise.then(function (res) {
            $scope.phones = res.phone;
            for (var i = 0; i < $scope.phones.length; i++) {
                $scope.phones[i].imagesUrl = [2];
                for (var j = 0; j <= 1; j++) {
                    //$scope.phones[i].imagesUrl[j] = './img/phones/' + $scope.phones[i].phone_id + '/' + j + '.jpg';
                    $scope.phones[i].imagesUrl[j] = './img/phones/default.png';
                }
            }
        });
    }
    $scope.currentPhone = {};
    $scope.changePhone = function(phone){
        $scope.currentPhone = phone;
        console.log("Here, delete");
        console.log($scope.currentPhone);
    }
    $scope.deletePhone = function(){
        console.log("Deleting" + $scope.currentPhone.phone_id);
        Phone.delete({phoneId: $scope.currentPhone.phone_id});
        $scope.loadPhone();     // Reload phonelist
    }

    $scope.editPhone = function(){
        console.log("Editing" + $scope.currentPhone.phone_id);
        $http.put('v1/api/phone', $scope.currentPhone).success(function (data, status, headers, config) {
            console.log("Put OK ");
        }).error(function (data, status, headers, config) {
            console.log('Put error');
        });
        $scope.loadPhone();     // Reload phonelist
    }
    $scope.createPhone = function(){
        console.log("Creating " + $scope.currentPhone.phone_id);
    }
    $scope.showInfo = function(){
        alert(JSON.stringify($scope.currentPhone,null," \n "));
        //console.log(JSON.stringify($scope.currentPhone,null," \n "));
    }




}]);
