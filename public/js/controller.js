var myAppCtrl = angular.module('myAppCtrls', []);


myAppCtrl.controller('HomeCtrl', ['$scope', function ($scope) {
    // Load ra 10 review mới nhất
    // Load ra 10 news mới nhất
    // Load ra 10 popular phones
    // Load ra 10 lastest phones
}]);


myAppCtrl.controller('BrandListCtrl', ['$scope', 'Brand', function ($scope, Brand) {
    Brand.query().$promise.then(function (res) {
        $scope.brands = res.brand;
        console.log($scope.brands);
    });
    $scope.orderProp = 'brand_name';
}]);

myAppCtrl.controller('BrandDetailCtrl', ['$scope', '$routeParams', 'Brand', function ($scope, $routeParams, Brand) {
    $scope.brandphones = Brand.get({brandId: $routeParams.brandId}, function (brand) {
        console.log('Get brand detail ok!');
        console.log($scope.brandphones);
    })
}]);

myAppCtrl.controller('PhoneListCtrl', ['$scope', 'Phone', 'Brand', function ($scope, Phone, Brand) {
    $scope.orderProp = 'name';
    $scope.phones = Phone.query();
    $scope.brands = Brand.query();
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
myAppCtrl.controller('DashboardCtrl', ['$scope', '$http', 'StorageService', function ($scope, $http, StorageService) {
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

    }

}]);
