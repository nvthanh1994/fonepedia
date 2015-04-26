var myAppCtrl = angular.module('myAppCtrls', []);

myAppCtrl.controller('HomeCtrl', ['$scope', function ($scope) {
    // Load ra 10 review mới nhất
    // Load ra 10 news mới nhất
    // Load ra 10 popular phones
    // Load ra 10 lastest phones
}]);


myAppCtrl.controller('BrandListCtrl',['$scope','Brand',function($scope,Brand){
    Brand.query().$promise.then(function(res){
        $scope.brands = res;
        console.log($scope.brands.error_code);
        console.log($scope.brands.brand);
    });
    $scope.orderProp='name';
}]);

myAppCtrl.controller('BrandDetailCtrl',['$scope','$routeParams', 'Brand',function($scope,$routeParams,Brand){
    $scope.brand = Brand.get({brandId : $routeParams.brandId},function(brand){
        console.log('Get brand detail ok!');
    })

}]);


myAppCtrl.controller('PhoneListCtrl', ['$scope', 'Phone', 'Brand', function ($scope, Phone, Brand) {
    $scope.orderProp = 'name';
    $scope.phones = Phone.query();
    $scope.brands = Brand.query();
}]);

myAppCtrl.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function ($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        console.log("Get ok !");
    });
}]);

myAppCtrl.controller('ReviewListCtrl', ['$scope', 'Review', function ($scope, Review) {
    console.log("Here");
    $scope.orderProp='title';
    $scope.info = "At review list";
    $scope.reviews = Review.query();
}]);

myAppCtrl.controller('ReviewDetailCtrl', ['$scope', 'Review', '$routeParams', function ($scope, Review, $routeParams) {
    $scope.info = "At review detail";
}]);


// Craft :v.
myAppCtrl.controller('AdminCtrl', ['$scope', function ($scope) {
    $scope.user = {
        username: "",
        password: ""
    }
    $scope.logined = true;
    $scope.login = function (user) {
        if (user.username === "" && user.password === "") {
            //alert("You have logged in successfully!");
            $scope.logined = true;
        }
    }
}]);
