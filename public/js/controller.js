var myAppCtrl = angular.module('myAppCtrls', []);

myAppCtrl.controller('HomeCtrl', ['$scope', function ($scope) {
    // Load ra 10 review mới nhất
    // Load ra 10 news mới nhất
    // Load ra 10 popular phones
    // Load ra 10 lastest phones
}]);

myAppCtrl.controller('PhoneListCtrl', ['$scope','Phone', function ($scope, Phone) {
    $scope.orderProp = 'name';
    $scope.phones = Phone.query();
}]);

myAppCtrl.controller('PhoneDetailCtrl', ['$scope','$routeParams', 'Phone',  function ($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId : $routeParams.phoneId},function(phone){
        console.log("Get ok !");
    });
}]);


// Craft :v.
myAppCtrl.controller('AdminCtrl', ['$scope', function ($scope) {
    $scope.user = {
        username : "",
        password : ""
    }
    $scope.logined = false;
    $scope.login = function(user){
        if(user.username==="" && user.password===""){
            //alert("You have logged in successfully!");
            $scope.logined=true;
        }
    }

}]);
