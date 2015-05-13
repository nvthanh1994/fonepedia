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

myAppCtrl.controller('BrandDetailCtrl', ['$scope', '$routeParams', 'Brand', 'Image', function ($scope, $routeParams, Brand, Image) {
    Brand.get({brandId: $routeParams.brandId}).$promise.then(function (res) {
        for (var i = 0; i < res.phones.length; i++) {
            //console.log(res.phones[i]);
            var id = res.phones[i].phone_id;
            res.phones[i].imagesUrl = Image.get({phoneId: id})
        }
        $scope.brandphones = res.phones;
        console.log($scope.brandphones);
    });
}]);

myAppCtrl.controller('PhoneListCtrl', ['$rootScope', '$scope', 'Phone', 'Brand', 'Image', '$http', function ($rootScope, $scope, Phone, Brand, Image, $http) {
    $scope.orderProp = 'phone_name';
    $scope.query = $rootScope.searchquery;
    $scope.brands = Brand.query();
    Phone.query().$promise.then(function (res) {
        for (var i = 0; i < res.phone.length; i++) {
            //console.log(res.phone[i]);
            var id = res.phone[i].phone_id;
            res.phone[i].imagesUrl = Image.get({phoneId: id})
        }
        $scope.phones = res.phone;
    });
}]);

myAppCtrl.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', 'Brand', 'Review', 'Image', function ($scope, $routeParams, Phone, Brand, Review, Image) {
    Phone.get({phoneId: $routeParams.phoneId}).$promise.then(function (res) {

        res.phone.imagesUrl = Image.get({phoneId: res.phone.phone_id});
        Image.get({phoneId: res.phone.phone_id}).$promise.then(function (res2) {
            // Gallery
            $scope.myInterval = 5000;
            var slides = $scope.slides = [];
            $scope.addSlide = function (i) {
                //var newWidth = 600 + slides.length + 1;
                slides.push({
                    //image: 'http://placekitten.com/' + newWidth + '/300'
                    image: res2.images[i].imageUrl
                });
            };
            for (var i = 0; i < res2.images.length; i++) {
                $scope.addSlide(i);
            }
            //console.log(res2.images.length);
            //console.log(res2.images[0]);
        });
        res.similar = Brand.get({brandId: res.phone.brand_id});
        $scope.phone = res.phone;
        $scope.similar = res.similar;
        console.log($scope.phone);
        console.log($scope.similar);
    });
    $scope.info = 'Phone Detail Ctrl';

    Review.get({reviewId: $routeParams.phoneId}).$promise.then(function (res) {
        $scope.review = res.review;
    });


}]);

myAppCtrl.controller('ReviewListCtrl', ['$scope', 'Review', 'Image', function ($scope, Review, Image) {
    console.log("Here");
    $scope.orderProp = 'review_date';
    $scope.info = "At review list";
    Review.query().$promise.then(function (res) {
        for (var i = 0; i < res.review.length; i++) {
            res.review[i].imagesUrl = Image.get({phoneId: res.review[i].phone_id})
        }
        $scope.reviews = res.review;
    });
}]);

myAppCtrl.controller('ReviewDetailCtrl', ['$scope', 'Review', '$routeParams', function ($scope, Review, $routeParams) {
    $scope.info = "At review detail";
    $scope.review = {
        review_id: '0',
        review_title: 'None',
        review_content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto beatae consectetur, dolor dolore ducimus eveniet ex illo inventore officia, pariatur placeat quibusdam reiciendis repellendus, sapiente sed similique ullam voluptate.',
        review_avatar: 'http://localhost:8000/img/phones/review_default.png',
        phone_id: 'none'
    }

    Review.get({reviewId: $routeParams.reviewId}).$promise.then(function (res) {
        $scope.review = res.review;
        console.log($scope.review);
    });
}]);

myAppCtrl.controller('NewListCtrl', ['$scope', 'New', function ($scope, New) {
    console.log("Here");
    $scope.orderProp = 'new_date';
    $scope.info = "At new list";
    New.query().$promise.then(function (res) {
        $scope.news = res.new;
    });
}]);

myAppCtrl.controller('NewDetailCtrl', ['$scope', 'New', '$routeParams', function ($scope, New, $routeParams) {
    $scope.info = "At new detail";
    New.get({newId: $routeParams.newId}).$promise.then(function (res) {
        $scope.new = res.new;
        console.log($scope.new);
    });
}]);

// Craft :v.
myAppCtrl.controller('DashboardCtrl', ['New', 'Image', 'Brand', 'Phone', 'Review', '$route', '$timeout', '$scope', '$http', 'StorageService', '$location', function (New, Image, Brand, Phone, Review, $route, $timeout, $scope, $http, StorageService, $location) {
    $scope.orderProp1 = 'phone_name';
    $scope.orderProp2 = 'review_date';
    $scope.orderProp3 = 'new_date';

    /**
     * Authentication Controller
     * @type {{username: string, password: string}}
     */
    $scope.user = {
        username: "",
        password: ""
    }
    $scope.wrongUser = false;

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
                $scope.wrongUser = false;
                //console.log(data);
            }
            else {
                $scope.wrongUser = true;
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


    /**
     * Phone Controller
     * @type {string[]}
     */
    $scope.listBrandId = ['apple', 'blackberry', 'asus', 'htc', 'huawei', 'lenovo', 'lg', 'microsoft', 'nokia', 'xiaomi', 'oppo', 'motorola', 'samsung', 'sharp', 'sony'];

    $scope.loadPhone = function () {
        Phone.query().$promise.then(function (res) {
            for (var i = 0; i < res.phone.length; i++) {
                res.phone[i].imagesUrl = Image.get({phoneId: res.phone[i].phone_id})
            }
            $scope.phones = res.phone;
            $scope.addphone = angular.copy($scope.phones[0]);
            for (var key in $scope.addphone) {
                if ($scope.addphone.hasOwnProperty(key)) {
                    $scope.addphone[key] = '';
                }
            }
        });
    }
    $scope.currentPhone = {};

    $scope.updatePhone = function (phone) {
        Phone.get({phoneId: phone.phone_id}).$promise.then(function (res) {
            phone = res.phone;
        });
    }

    $scope.changePhone = function (phone) {
        $scope.currentPhone = phone;
        console.log("Here, delete");
        console.log($scope.currentPhone);
    }
    $scope.deletePhone = function () {
        console.log("Deleting" + $scope.currentPhone.phone_id);
        Phone.delete({phoneId: $scope.currentPhone.phone_id});
        $scope.loadPhone();     // Reload phonelist
    }

    $scope.editPhone = function () {
        console.log("Editing" + $scope.currentPhone.phone_id);
        $http.put('v1/api/phone', $scope.currentPhone).success(function (data, status, headers, config) {
            console.log("Put OK ");
        }).error(function (data, status, headers, config) {
            console.log('Put error');
        });
        $scope.loadPhone();     // Reload phonelist
    }

    $scope.addPhone = function () {

    }
    $scope.createPhone = function () {
        console.log("Creating " + $scope.addphone);
        $http.post('v1/api/phone', $scope.addphone).success(function (data, status, headers, config) {
            console.log('Post OK');
        }).error(function (data, status, headers, config) {
            console.log('Post error');
        });
        $scope.loadPhone();
    }
    $scope.showInfo = function (phone) {
        alert(JSON.stringify(phone, null, " \n "));
        //console.log(JSON.stringify($scope.currentPhone,null," \n "));
    }
    $scope.deleteImage = function (imageId) {
        console.log(imageId);
        $http.delete('v1/api/image/' + imageId).success(function (data, status, headers, config) {
            console.log("delete " + imageId + ' ok !');
        }).error(function (data, status, headers, config) {
            console.log('delete not ok');
        });
        $scope.loadPhone();
        $scope.updatePhone($scope.currentPhone);
    }
    /**
     * Review Controller
     */
    $scope.loadReview = function () {
        Review.query().$promise.then(function (res) {
            for (var i = 0; i < res.review.length; i++) {
                res.review[i].imagesUrl = Image.get({phoneId: res.review[i].phone_id})
            }
            $scope.reviews = res.review;

            $scope.addreview = angular.copy($scope.reviews[0]);
            for (var key in $scope.addreview) {
                if ($scope.addreview.hasOwnProperty(key)) {
                    $scope.addreview[key] = '';
                }
            }
        });
    }
    $scope.currentReview = {};

    $scope.changeReview = function (review) {
        $scope.currentReview = review;
        console.log("Here, delete review");
        console.log($scope.currentReview);
    }
    $scope.deleteReview = function () {
        console.log("Deleting " + $scope.currentReview.review_id);
        Review.delete({reviewId: $scope.currentReview.review_id});
        $scope.loadReview();     // Reload reviewlist
    }

    $scope.createReview = function () {
        console.log("Creating " + $scope.addreview);
        $http.post('v1/api/review', $scope.addreview).success(function (data, status, headers, config) {
            console.log('Post OK review');
        }).error(function (data, status, headers, config) {
            console.log('Post error review');
        });
        $scope.loadReview();
    }
    $scope.editReview = function () {
        console.log("Editing " + $scope.currentReview.review_title);
        console.log("Editing " + $scope.currentReview.review_content);
        console.log($scope.currentReview);
        $http.put('v1/api/review', $scope.currentReview).success(function (data, status, headers, config) {
            console.log("Put review OK ");
        }).error(function (data, status, headers, config) {
            console.log('Put review error');
        });
        $scope.loadReview();     // Reload reviewlist
    }

    /**
     * News Controller
     */
    $scope.loadNew = function () {
        New.query().$promise.then(function (res) {
            $scope.news = res.new;
            $scope.addnew = angular.copy($scope.news[0]);
            for (var key in $scope.addnew) {
                if ($scope.addnew.hasOwnProperty(key)) {
                    $scope.addnew[key] = '';
                }
            }
        });
    }
    $scope.currentNew = {};

    $scope.changeNew = function (review) {
        $scope.currentNew = review;
        console.log("Here, delete new");
        console.log($scope.currentNew);
    }
    $scope.deleteNew = function () {
        console.log("Deleting " + $scope.currentNew.new_id);
        New.delete({newId: $scope.currentNew.new_id});
        $scope.loadNew();     // Reload newList
    }

    $scope.createNew = function () {
        console.log("Creating " + $scope.addnew);
        $http.post('v1/api/new', $scope.addnew).success(function (data, status, headers, config) {
            console.log('Post OK new');
        }).error(function (data, status, headers, config) {
            console.log('Post error new');
        });
        $scope.loadNew();
    }
    $scope.editNew = function () {
        console.log("Editing " + $scope.currentNew.new_title);
        console.log("Editing " + $scope.currentNew.new_content);
        console.log($scope.currentNew);
        $http.put('v1/api/new', $scope.currentNew).success(function (data, status, headers, config) {
            console.log("Put new OK ");
        }).error(function (data, status, headers, config) {
            console.log('Put new error');
        });
        $scope.loadNew();     // Reload newlist
    }

    /**
     * Upload Controller
     * @param content
     */
    $scope.uploadComplete = function (content) {
        console.log(content);
        $scope.response = content;
    };

    $scope.tempId = 'dumb';

}]);

