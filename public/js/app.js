'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ngRoute', 'ngAnimate']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: MyCtrl1, css: 'css/partial1.css'});
    $routeProvider.when('/view2', {templateUrl: 'partial/About', controller: MyCtrl2, css: 'css/about.css'});
    $routeProvider.when('/resume', {templateUrl: 'partial/Resume', controller: ResumeCtrl});
    $routeProvider.when('/project1', {templateUrl: 'partial/Project1', controller: Project1Ctrl});
    $routeProvider.when('/project2', {templateUrl: 'partial/Project2', controller: Project2Ctrl});    
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);