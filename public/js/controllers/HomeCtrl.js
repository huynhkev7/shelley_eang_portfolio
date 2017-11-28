'use strict';

angular.module('myApp.homeCtrl', [])
  .controller('HomeCtrl', ['$location', '$scope', '$timeout', '$rootScope', 'globalFunctions', function($location, $scope, $timeout, $rootScope, globalFunctions) {
    $rootScope.currentBaseUrl =  $location.path();   
    if(globalFunctions.getIsMobile()){
        $rootScope.showNavbar = true;
    }else{
        $rootScope.showNavbar = false;
    };
    $scope.goToProject = function(route) {
        if(route.length > 0 || route !== ''){
            $location.path('/' + route);
        }
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
    $scope.workExperiences = [
        {
            url: 'images/portfolio_headers/sgi.jpg',
            title: 'Sustainability Guild International',
            description: 'Through a user centered design process, I designed a new website for a non-profit aiming to provide programs and resources to communities in Boston.',
            route: '',
            tags: ['Internship /', 'UX /', 'UI /', 'NDA' ],
            class: ''
        },
        {
            url: 'images/portfolio_headers/ala.jpg',
            title: 'Asian Law Alliance',
            description: 'Appling core visual design concepts, I designed event flyers, letters, and social media banners for a non-profit focused in providing access to basic human and legal rights.',
            route: 'Ala',
            tags: ['Internship /', 'Graphic Design '],
            class: ''
        },
        // {
        //     url: 'images/portfolio_headers/g2l.jpg',
        //     title: 'Boston Shakespeare Project',
        //     description: 'Designed infographic to communicate key indicators and outcomes to prospective donors for a non-profit focused in providing art and humanity programs to under-resourced youth.',
        //     route: '',
        //     tags: ['Internship /', 'Visual Design '],
        //     class: 'boston'
        // },
        {
            url: 'images/portfolio_headers/g2l.jpg',
            title: 'G2L',
            description: 'Using UX design principles, I designed and revamped a new website for a non-profit aiming to improve public health services in my local community.',
            route: '',
            tags: ['Internship /', 'UX /', 'NDA'],
            class: ''
        },
        {
            url: 'images/portfolio_headers/avanade.jpg',
            title: 'Avanade',
            description: 'I interned at Avanade, an IT consulting company focused on the Microsoft platform, where I helped design and develop the interface of a multi-million dollar application.',
            route: '',
            tags: ['Internship /', 'UX /', 'UI /', 'NDA'],
            class: ''
        }           
    ]
    $scope.listOfProjects = [
        {
            url: 'images/portfolio_headers/fp.jpg',
            title: 'Freedom Project',
            description: 'As part of the 12-hour \“Design Like Mad\” event, I helped designed logos and collaterals for a non-profit to promote to non violent communication, mindfulness, and racial equity.',
            route: 'Freedom',
            tags: ['Design Marathon /', 'Graphic Design'],
            class: ''
        },
        {
            url: 'images/portfolio_headers/rec.jpg',
            title: 'RECOVERY',
            description: 'Using a culmination of my skills in the user-centered design process, I helped design RECOVERY: Earthquake Edition, a board game that educates players about disaster recovery.',
            route: 'recovery',
            tags: ['UX Design /', 'User Research /', 'Capstone'],
            class: ''
        }, 
        {
            url: 'images/portfolio_headers/atomic.jpg',
            title: 'atomiC',
            description: 'Using my skills in UX design and user research, I helped design a mobile prototype application aimed to track carbon foot print, impose carbon taxes, and improve overall sustainability.',
            route: 'atomic',
            tags: ['UX Design /', 'User Research'],
            class: ''
        },
        {
            url: 'images/portfolio_headers/wta.jpg',
            title: 'WTA',
            description: 'Applying principles of visual design, I developed a high-fidelity web design and mobile design mock up of a potentially improved Washington Trails Association website.',
            route: 'Wta',
            tags: ['Redesign /', 'Visual Design /', 'Branding'],
            class: ''
        },   
        {
            url: 'images/portfolio_headers/ss.jpg',
            title: 'Sightseers',
            description: 'Through iterations of user research and usability tests, I helped develop a mobile application prototype to better document and share their travel experiences.',
            route: 'SightSeers',
            tags: ['UX Design /', 'User Research '],
            class: ''
        }                  
    ];    
    
    var $projectAnchor = document.getElementById('projects-content');

    function monitorScrollPosition(){
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
  }]);