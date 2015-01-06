(function () {
    'use strict';
    angular.module("mPlatform.controllers")
        .controller('ProductCtrl', ['$scope', 'products', function ($scope, products) {
            var refresh = function () {
//$scope.products = storage.getAll();
            }

            var searchResult = function (item) {
                return products.getSearchResults(item)
                    .then(function (data) {
                        $scope.products = data
                        return data;
                    }, function (errorMessage) {
                        return errorMessage;
                    });
            }

            $scope.search = function () {
                var text = $scope.productsModel;
                if (!text) {
                    return;
                };
                searchResult(text);
                $scope.productsModel = '';
            }

            refresh();
        }]);
})();