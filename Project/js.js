let myApp = angular.module("myList", []); 
myApp.controller("myListcontroller", function($scope) {
    $scope.items = ["Jane Austen", "Mark Twain", "Salman Rashdie", "J.K. Rowling"];
    $scope.newitems = "";
    $scope.pushitem = function () {

        if($scope.newitem != "") {
    
            $scope.items.push($scope.newitem);
            $scope.newitem = "";

        }
            
    }

    $scope.deleteitem = function(index) {

        $scope.items.splice(index, 1);

    }



});
