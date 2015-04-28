var myAppCtrl = angular.module('myAppCtrls', []);

myAppCtrl.controller('HomeCtrl', ['$scope', function ($scope) {
    // Load ra 10 review mới nhất
    // Load ra 10 news mới nhất
    // Load ra 10 popular phones
    // Load ra 10 lastest phones
}]);


myAppCtrl.controller('BrandListCtrl',['$scope','Brand',function($scope,Brand){
    Brand.query().$promise.then(function(res){
        $scope.brands = res.brand;
        console.log($scope.brands);
    });
    $scope.orderProp = 'brand_name';
}]);

myAppCtrl.controller('BrandDetailCtrl',['$scope','$routeParams', 'Brand',function($scope,$routeParams,Brand){
    $scope.brandphones = Brand.get({brandId : $routeParams.brandId},function(brand){
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
    Phone.get({phoneId: $routeParams.phoneId}).$promise.then(function(res){
        $scope.phone = res.phone;
        console.log($scope.phone);

        $scope.phone.imagesUrl = [2];
        for(var i=0;i<=1;i++){
            $scope.phone.imagesUrl[i] = './img/phones/'+$scope.phone.phone_id+'/'+i+'.jpg';
        }
    });
    $scope.info = 'Phone Detail Ctrl';
    $scope.brands = Brand.query();
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
    $scope.logined = false;
    $scope.login = function (user) {
        if (user.username === "" && user.password === "") {
            //alert("You have logged in successfully!");
            $scope.logined = true;
        }
    }
}]);
