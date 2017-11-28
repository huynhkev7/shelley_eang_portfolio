'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.appCtrl', 'myApp.homeCtrl', 'myApp.resumeCtrl',
 'myApp.recoveryCtrl', 'myApp.atomicCtrl','myApp.filters', 'myApp.services',
 'myApp.wtaCtrl', 'myApp.sightSeersCtrl', 'myApp.sgiCtrl', 'myApp.aboutCtrl',
 'myApp.freedomCtrl',
 'myApp.directives','ngRoute', 'ngAnimate','ngYoutubeEmbed', 'ngSanitize']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {templateUrl: 'partial/Home', controller: 'HomeCtrl', css: 'css/partial1.css'});
  $routeProvider.when('/about', {templateUrl: 'partial/About', controller: 'AboutCtrl', css: 'css/about.css'});
  $routeProvider.when('/resume', {templateUrl: 'partial/Resume', controller: 'ResumeCtrl'});
  $routeProvider.when('/recovery', {templateUrl: 'partial/Recovery', controller: 'RecoveryCtrl'});
  $routeProvider.when('/atomic', {templateUrl: 'partial/Atomic', controller: 'AtomicCtrl'});   
  $routeProvider.when('/SightSeers', {templateUrl: 'partial/SightSeers', controller: 'SightSeersCtrl' });  
  $routeProvider.when('/Wta', {templateUrl: 'partial/Wta', controller: 'WtaCtrl' });      
  $routeProvider.when('/Sgi', {templateUrl: 'partial/Sgi', controller: 'SgiCtrl' });    
  $routeProvider.when('/Freedom', {templateUrl: 'partial/Freedom', controller: 'FreedomCtrl' });     
  $routeProvider.otherwise({redirectTo: '/home'});
  $locationProvider.html5Mode(true);
}]);

// myApp.controller('AppCtrl', AppCtrl);