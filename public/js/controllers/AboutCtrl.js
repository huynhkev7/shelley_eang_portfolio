'use strict';

angular.module('myApp.aboutCtrl', [])
  .controller('AboutCtrl', ['$scope', '$rootScope', 'globalFunctions', '$location', function($scope, $rootScope, globalFunctions, $location) {
    $rootScope.currentBaseUrl =  $location.path();    
    $rootScope.showNavbar = true;
  }]);
