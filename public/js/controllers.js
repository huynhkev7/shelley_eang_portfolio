'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}

function MyCtrl1($location, $scope, $timeout) {
    $scope.listOfProjects = [
        {
            url: 'http://www.logo-company.in/logo/171.jpg',
            title: 'Cool Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project1'
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2'
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2'
        }        
    ]
}
MyCtrl1.$inject = ['$location', '$scope', '$timeout'];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function Project1Ctrl() {
    console.log("entering project 1");
}
Project1Ctrl.$inject = [];

function Project2Ctrl() {
    console.log("entering project 2");
}
Project2Ctrl.$inject = [];