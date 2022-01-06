var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
  $scope.firstName = "John-Alasdair";
  $scope.middleName = "Liam";
  $scope.lastName = "Hazen";
  $scope.fullName = function() {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
  $scope.currentJob = "Programmer";
  $scope.formerJob = "Technical Support (L1 / L2)"
  $scope.address1 = "10 Plantagenet Way";
  $scope.address2 = "Gillingham, Dorset SP8 4TF";
  $scope.address3 = "United Kingdom";
  $scope.email = "alasdair.hazen@gmail.com";
});
