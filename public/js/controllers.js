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
        },
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

function Project1Ctrl($scope) {
    // $scope.listOfImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png','https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png'];
    //$scope.listOfImages = ['http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png'];
    $scope.listOfImages = [
        {
            imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
            depth: '.10',
            additionalStyles: 'background-position: right bottom;'
        },
        {
            imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
            depth: '.50',
            additionalStyles: 'background-position: right top;'
        },
        {
            imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
            depth: '.80',
            additionalStyles: 'background-position: left top;'
        },
        {
            imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
            depth: '.85',
            additionalStyles: 'background-position: left bottom;'
        },
        {
            imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
            depth: '1.00',
            additionalStyles: ''
        }
    ];
    console.log($scope.listOfImages);
    console.log("entering project 1");  
}
Project1Ctrl.$inject = ['$scope'];

function Project2Ctrl() {
    console.log("entering project 2");
}
Project2Ctrl.$inject = [];