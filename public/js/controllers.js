'use strict';

/* Controllers */

function AppCtrl($scope, $http, $rootScope, globalFunctions, $location) {
  console.log("in AppCtril");
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
  var isMobile = globalFunctions.getIsMobile();

  if(globalFunctions.getIsMobile()){
      $rootScope.showNavbar = true;
  }else{
      $rootScope.showNavbar = false;
  };
  $rootScope.currentBaseUrl = '/view1';


  $scope.routeTo = function(route){
      console.log(route);
      angular.element( document.querySelector( '.navbar-collapse' ) ).addClass('collapse');
      angular.element( document.querySelector( '.navbar-collapse' ) ).removeClass('in');
      window.scrollTo(0, 0);
      $location.path('/' + route);
  }

   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.
   $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
    });        

   $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
       window.scrollTo(0, 0);
        if($rootScope.actualLocation === newLocation) {
            //alert('Why did you use history back?');
            var $modalBackDrop = document.getElementsByClassName('modal-backdrop fade in');
            if($modalBackDrop){
                angular.element($modalBackDrop).remove()
                angular.element(document.getElementsByClassName('modal-open')).removeClass('modal-open');
            }
        }
    });  
    
}
AppCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];

function MyCtrl1($location, $scope, $timeout, $rootScope, globalFunctions) {
    console.log($location.path());
    $rootScope.currentBaseUrl =  $location.path();   
    if(globalFunctions.getIsMobile()){
        $rootScope.showNavbar = true;
    }else{
        $rootScope.showNavbar = false;
    };

    console.log("in MyCtrl1");

    $scope.goToProject = function(route) {
        $location.path('/' + route);
    }

    function myCallback(){
        console.log('calling vivus...');
    }
    var hi = new Vivus('my-animation', {
        file: 'images/name_logo.svg', 
        type: 'sync', duration: 75, 
        start: 'autostart', 
        forceRender: false,
        onReady: function (myVivus) {
            // `el` property is the SVG element
            myVivus.el.setAttribute('height', '100%');
            myVivus.el.setAttribute('width', '360px');
            
        },                
            dashGap: 20}
            , function () {
            if (window.console) {
                console.log('Animation finished. [log triggered from callback]');
            }
        });
    var hi2 = new Vivus('my-second-animation', {
        file: 'images/third_animation_2.svg', 
        type: 'sync', duration: 75, 
        start: 'autostart', 
        forceRender: false,
        onReady: function (myVivus) {
            // `el` property is the SVG element
            myVivus.el.setAttribute('height', '100%')
            myVivus.el.setAttribute('width', '360px');
        },                
            dashGap: 20}
            , function () {
            if (window.console) {
                console.log('Animation finished. [log triggered from callback]');
            }
        });
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
    $scope.workExperiences = [
        {
            url: 'images/g2l_logo.jpg',
            title: 'Cool Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project1',
            tags: ['Fun!', 'UX', 'UI']
        },
        {
            url: 'images/avanade_logo.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['Healthcare', 'Social Work']
        }          
    ]
    $scope.listOfProjects = [
        {
            url: 'images/recovery_logo.jpg',
            title: 'Recovery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project1',
            tags: ['UX', 'Visual Design']
        },
        {
            url: 'images/atomic_logo.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['User Research']
        },
        {
            url: 'images/sight_seers_logo.jpg',
            title: '#2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt laboriosam voluptatem necessitatibus cum, tenetur repellat, eaque eos debitis! Quaerat.',
            route: 'project2',
            tags: ['Videography']
        }             
    ];    
    
    var $projectAnchor = document.getElementById('projects-content');

    function monitorScrollPosition(){
        console.log(window.scrollY);
        console.log('element');
        console.log($projectAnchor.offsetTop);   
        console.log($scope);  
        var isMatch = window.scrollY >= $projectAnchor.offsetTop;   
        if (isMatch != undefined && isMatch || globalFunctions.getIsMobile())  {
                $rootScope.showNavbar = true;
            } else {
                $rootScope.showNavbar = false;
            }
        $scope.$apply();
    };
    angular.element(window).on("scroll", monitorScrollPosition);  
    $scope.$on('$destroy', function () {
        angular.element(window).off('scroll', monitorScrollPosition);
    });
}
MyCtrl1.$inject = ['$location', '$scope', '$timeout', '$rootScope', 'globalFunctions'];


function MyCtrl2($scope, $rootScope, globalFunctions, $location) {
    console.log($location.path());
    $rootScope.currentBaseUrl =  $location.path();    
    console.log("in MyCrtl2");
    $rootScope.showNavbar = true;
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
    ]; 
}
MyCtrl2.$inject = ['$scope', '$rootScope', 'globalFunctions', '$location'];

function ResumeCtrl($scope, $http, $rootScope, globalFunctions, $location) {
    console.log("in ResumeCtrl");
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/resume'
}

ResumeCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];

function Project1Ctrl($scope, $rootScope, globalFunctions) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/view1'  
    // $scope.listOfImages = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png','https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png'];
    //$scope.listOfImages = ['http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png', 'http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Bubbles-PNG-Transparent-Image.png'];
    $scope.video = {
        id: 'clXBiR01kUM'
    };   
    $scope.team = [
        {
            name: 'Shelley Eang',
            role: 'UX & Visual Designer',
            image: 'images/shelley_avatar.png'
        },
        {
            name: 'Michael Chen',
            role: 'User Researcher',
            image: 'images/michael_avatar.png'
        },
        {
            name: 'Khalil Somani',
            role: 'Liaison & User Researcher',
            image: 'images/khalil_avatar.png'
        },
        {
            name: 'Amy Tang',
            role: 'Project Manager & UX Designer',
            image: 'images/amy_avatar.png'
        }               
    ];
    $scope.responsibilities = [
        {
            description: 'Conducting Web Research and Competitive Analysis',
            image: 'fa-search'
        },
        {
            description: 'Conducting Affinity Analysis',
            image: 'fa-sticky-note-o'
        },
        {
            description: 'Creating Persona and Scenarios',
            image: 'fa-users'
        },
        {
            description: 'Designing Low/High Fidelity Prototype',
            image: 'fa-pencil'
        },
        {
            description: 'Conduct and Record Usability Sessions',
            image: 'fa-clipboard'
        },            
        {
            description: 'Develop Product Video',
            image: 'fa-video-camera'
        }     
    ]

    
    $scope.lowFidelityPrototypes = [
        [
            {
                title: '1',
                src: 'http://placehold.it/360x240'
            },
            {
                title: '2',
                src: 'http://placehold.it/360x240'
            },
            {
                title: '3',
                src: 'http://placehold.it/360x240'
            },
            {
                title: '4',
                src: 'http://placehold.it/360x240'
            }           
        ],
        [
            {
                title: '5',
                src: 'http://placehold.it/360x240'
            },
            {
                title: '6',
                src: 'http://placehold.it/360x240'
            },
            {
                title: '7',
                src: 'http://placehold.it/360x240'
            }
        ]
    ];
    
    $scope.currentPrototype = {
        src: '',
        title: ''
    };

    $scope.openModal = function(currentPrototype){
        $scope.currentPrototype = currentPrototype;
        $('#prototypeModal').modal('show');
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
Project1Ctrl.$inject = ['$scope', '$rootScope','globalFunctions', '$location'];

function Project2Ctrl($scope, $rootScope, globalFunctions, $location) {   
    window.scrollTo(0, 0);
    console.log($location.path());
    $rootScope.currentBaseUrl =  '/view1'   
    $rootScope.showNavbar = true;
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
Project2Ctrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location'];