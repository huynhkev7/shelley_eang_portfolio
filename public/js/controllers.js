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
            route: 'project1',
            tags: ['UX', 'Interaction']
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['User Research']
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['Videography']
        },
        {
            url: 'http://www.logo-company.in/logo/171.jpg',
            title: 'Cool Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project1',
            tags: ['Fun!', 'UX', 'UI']
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['Healthcare', 'Social Work']
        },
        {
            url: 'https://s-media-cache-ak0.pinimg.com/736x/56/12/e0/5612e0dd052689b7ce9a68df31a1d1fa.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['TEST']
        }                    
    ]
}
MyCtrl1.$inject = ['$location', '$scope', '$timeout'];


function MyCtrl2($scope) {
    $scope.parallaxTitle = {
        title: 'About Me - Shelley Eang',
        color: '#16a085'
    };
    $scope.skills = ['UX Design', 'Interaction Design', 'Prototyping'];
    $scope.animateElementIn = function($el) {
        //alert('in');
        console.log($el);
        var animateValue = $el.attr('value');
        $el.removeClass('hide-item');
        $el.addClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
        //alert("out");
        var animateValue = $el.attr('value');
        $el.addClass('hide-item');
        $el.removeClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.listOfImages = [
        {
            imageUrl: 'https://i2.wp.com/bayareawebdesign.co/wp-content/uploads/2015/04/19-32-42_SHP-Edit.jpg',
            depth: '.10',
            additionalStyles: 'background-position: center;'
        }
        // {
        //     imageUrl: 'http://nobacks.com/wp-content/uploads/2014/11/Banana-27-500x408.png',
        //     depth: '.40',
        //     additionalStyles: 'background-position: right top;'
        // },
        // {
        //     imageUrl: 'http://nobacks.com/wp-content/uploads/2014/11/Cherry-47-500x490.png',
        //     depth: '.50',
        //     additionalStyles: 'background-position: left top;'
        // },
        // {
        //     imageUrl: 'http://nobacks.com/wp-content/uploads/2014/11/Orange-48-500x373.png',
        //     depth: '.75',
        //     additionalStyles: 'background-position: left bottom;'
        // },
        // {
        //     imageUrl: 'http://nobacks.com/wp-content/uploads/2014/11/Peach-42-276x500.png',
        //     depth: '.10',
        //     additionalStyles: 'background-position: bottom right'
        // },
        // {
        //     imageUrl: 'http://nobacks.com/wp-content/uploads/2014/11/Strawberry-38-500x394.png',
        //     depth: '1.00',
        //     additionalStyles: 'background-position: bottom center'
        // }                
    ];    
}
MyCtrl2.$inject = ['$scope'];

function Project1Ctrl($scope) {
    // $scope.listOfImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png','https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png'];
    //$scope.listOfImages = ['http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png'];
    $scope.parallaxTitle = {
        title: 'Project AtomiC',
        color: 'dark-grey'
    };
    // $scope.listOfImages = [
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.10',
    //         additionalStyles: 'background-position: right bottom;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.30',
    //         additionalStyles: 'background-position: right top;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.50',
    //         additionalStyles: 'background-position: left top;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.75',
    //         additionalStyles: 'background-position: left bottom;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '1.00',
    //         additionalStyles: ''
    //     }
    // ];

    $scope.listOfImages = [
        {
            imageUrl: 'http://www.daanelabs.com/wp-content/uploads/2015/02/Chemistry-Background-Light.jpg',
            //depth: '1.00',
            additionalStyles: ''
        }
    ];

    console.log($scope.listOfImages);
    console.log("entering project 1");  
}
Project1Ctrl.$inject = ['$scope'];

function Project2Ctrl($scope) {
    $scope.parallaxTitle = {
        title: 'Project WTA',
        color: 'green'
    };
    // $scope.listOfImages = [
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.10',
    //         additionalStyles: 'background-position: right bottom;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.30',
    //         additionalStyles: 'background-position: right top;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.50',
    //         additionalStyles: 'background-position: left top;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '.75',
    //         additionalStyles: 'background-position: left bottom;'
    //     },
    //     {
    //         imageUrl: 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png',
    //         depth: '1.00',
    //         additionalStyles: ''
    //     }
    // ];

    $scope.listOfImages = [
        {
            imageUrl: 'http://www.daanelabs.com/wp-content/uploads/2015/02/Chemistry-Background-Light.jpg',
            //depth: '1.00',
            additionalStyles: ''
        }
    ];    
    console.log("entering project 2");
}
Project2Ctrl.$inject = ['$scope'];