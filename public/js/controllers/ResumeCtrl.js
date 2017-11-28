'use strict';

angular.module('myApp.resumeCtrl', [])
  .controller('ResumeCtrl', ['$scope', '$http', '$rootScope', 'globalFunctions', '$location', function($scope, $http, $rootScope, globalFunctions, $location) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/resume';
  }]);
