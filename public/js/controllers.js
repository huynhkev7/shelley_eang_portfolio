'use strict';

/* Controllers */

function AppCtrl($scope, $http, $rootScope, globalFunctions, $location) {
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
    $rootScope.currentBaseUrl =  $location.path();   
    if(globalFunctions.getIsMobile()){
        $rootScope.showNavbar = true;
    }else{
        $rootScope.showNavbar = false;
    };
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
        var animateValue = $el.attr('value');
        $el.removeClass('hide-item');
        $el.addClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
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
    $rootScope.currentBaseUrl =  $location.path();    
    $rootScope.showNavbar = true;
    $scope.parallaxTitle = {
        title: 'About Me - Shelley Eang',
        color: '#16a085'
    };
    $scope.skills = ['UX Design', 'Interaction Design', 'Prototyping'];
    $scope.animateElementIn = function($el) {
        var animateValue = $el.attr('value');
        $el.removeClass('hide-item');
        $el.addClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
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
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/resume'
}

ResumeCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];

function Project1Ctrl($scope, $rootScope, globalFunctions) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/view1';
    $scope.videoURL = 'https://youtu.be/48piu-OeOrY';  
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
                title: 'Business Card',
                src: 'images/city/business.jpg'
            },
            {
                title: 'House Card',
                src: 'images/city/house_card.jpg'
            },
            {
                title: 'Fire Station Card',
                src: 'images/city/police_fire_station.jpg'
            },
            {
                title: 'School Card',
                src: 'images/city/school.jpg'
            }           
        ],
        [
            {
                title: 'Airport Card',
                src: 'images/community/airport.jpg'
            },
            {
                title: 'Light Rail Card',
                src: 'images/community/light_rail.jpg'
            },
            {
                title: 'Medical Center Card',
                src: 'images/community/medical_center.jpg'
            },
            {
                title: 'Sewage System Card',
                src: 'images/community/sewage_system.jpg'
            }            
        ],
        [
            {
                title: 'Performing Arts Card',
                src: 'images/improvement/performing_arts.jpg'
            },
            {
                title: 'Solar Panel Card',
                src: 'images/improvement/solar_panel.jpg'
            },
            {
                title: 'Stadium Card',
                src: 'images/improvement/stadium_card.jpg'
            },
            {
                title: 'Tourist Attraction Card',
                src: 'images/improvement/tourist_attraction.jpg'
            }            
        ]        
    ];

    $scope.highFidelityPrototypes = [
        [
            {
                title: 'Business Card',
                src: 'images/city_high_fidelity/business.jpg'
            },
            {
                title: 'House Card',
                src: 'images/city_high_fidelity/house_card.jpg'
            },
            {
                title: 'Fire Station Card',
                src: 'images/city_high_fidelity/police_fire_station.jpg'
            },
            {
                title: 'School Card',
                src: 'images/city_high_fidelity/school.jpg'
            }           
        ],
        [
            {
                title: 'Airport Card',
                src: 'images/community_high_fidelity/airport.jpg'
            },
            {
                title: 'Light Rail Card',
                src: 'images/community_high_fidelity/light_rail.jpg'
            },
            {
                title: 'Medical Center Card',
                src: 'images/community_high_fidelity/medical_center.jpg'
            },
            {
                title: 'Sewage System Card',
                src: 'images/community_high_fidelity/sewage_system.jpg'
            }            
        ],
        [
            {
                title: 'Decision Reached Card',
                src: 'images/solution/decision_reached.jpg'
            },
            {
                title: 'Funds Acquired Card',
                src: 'images/solution/funds_acquired.jpg'
            },
            {
                title: 'Tow Truck Card',
                src: 'images/solution/tow_truck.jpg'
            }         
        ],
        [
            {
                title: 'Back of Card',
                src: 'images/back_of_card.jpg'
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
        var animateValue = $el.attr('value');
        $el.removeClass('hide-item');
        $el.addClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
        var animateValue = $el.attr('value');
        $el.addClass('hide-item');
        $el.removeClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.parallaxTitle = {
        title: 'Project AtomiC',
        color: 'dark-grey'
    };
    $scope.listOfImages = [
        {
            imageUrl: 'http://www.daanelabs.com/wp-content/uploads/2015/02/Chemistry-Background-Light.jpg',
            additionalStyles: ''
        }
    ]; 
}
Project1Ctrl.$inject = ['$scope', '$rootScope','globalFunctions', '$location'];

function Project2Ctrl($scope, $rootScope, globalFunctions, $location) {   
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/view1'   
    $rootScope.showNavbar = true;
    $scope.videoURL = 'https://youtu.be/48piu-OeOrY';  
    $scope.video = {
        id: 'clXBiR01kUM'
    };   
    $scope.team = [
        {
            name: 'Shelley Eang',
            role: 'Visual & UX Design'
        },
        {
            name: 'Sean Hoon',
            role: 'Project Manager'
        },
        {
            name: 'Michael Kozlowski',
            role: 'Technical Writer'
        },
        {
            name: 'Lacey Peil',
            role: 'Visual Design & Research'
        }               
    ];
    $scope.responsibilities = [
        {
            description: 'Conducting Web Research and Competitive Analysis',
            image: 'fa-search'
        },
        {
            description: 'Create Persona and Scenarios',
            image: 'fa-sticky-note-o'
        },
        {
            description: 'Develop Sitemap',
            image: 'fa-users'
        },
        {
            description: 'Design Screens of the Mobile Prototype',
            image: 'fa-pencil'
        },
        {
            description: 'Edit and Finalize Lo and Hi-Fi Design Mockups',
            image: 'fa-clipboard'
        },            
        {
            description: 'Facilitate, Moderate, and Note-take Usability Studies',
            image: 'fa-video-camera'
        },
        {
            description: 'Collaborate in Creating Group Presentations',
            image: 'fa-video-camera'
        },
        {
            description: 'Contribute and Finalize Final Report',
            image: 'fa-video-camera'
        }                    
    ]

    
    $scope.lowFidelityPrototypes = [
        [
            {
                title: 'Business Card',
                src: 'images/city/business.jpg'
            },
            {
                title: 'House Card',
                src: 'images/city/house_card.jpg'
            },
            {
                title: 'Fire Station Card',
                src: 'images/city/police_fire_station.jpg'
            },
            {
                title: 'School Card',
                src: 'images/city/school.jpg'
            }           
        ],
        [
            {
                title: 'Airport Card',
                src: 'images/community/airport.jpg'
            },
            {
                title: 'Light Rail Card',
                src: 'images/community/light_rail.jpg'
            },
            {
                title: 'Medical Center Card',
                src: 'images/community/medical_center.jpg'
            },
            {
                title: 'Sewage System Card',
                src: 'images/community/sewage_system.jpg'
            }            
        ],
        [
            {
                title: 'Performing Arts Card',
                src: 'images/improvement/performing_arts.jpg'
            },
            {
                title: 'Solar Panel Card',
                src: 'images/improvement/solar_panel.jpg'
            },
            {
                title: 'Stadium Card',
                src: 'images/improvement/stadium_card.jpg'
            },
            {
                title: 'Tourist Attraction Card',
                src: 'images/improvement/tourist_attraction.jpg'
            }            
        ]        
    ];

    $scope.highFidelityPrototypes = [
        [
            {
                title: 'Carbon ID Screen',
                src: 'images/atomic/atomic_high_fidelity/carbon_id.jpg'
            },
            {
                title: 'Create Account Screen',
                src: 'images/atomic/atomic_high_fidelity/create_account.jpg'
            },
            {
                title: 'Entering Atomic Screen',
                src: 'images/atomic/atomic_high_fidelity/entering_atomic.jpg'
            },
            {
                title: 'Food Data Screen',
                src: 'images/atomic/atomic_high_fidelity/food_data.jpg'
            }           
        ],
        [
            {
                title: 'Food Reports Screen',
                src: 'images/atomic/atomic_high_fidelity/food_reports.jpg'
            },
            {
                title: 'Food Screen',
                src: 'images/atomic/atomic_high_fidelity/food.jpg'
            },
            {
                title: 'Home Screen',
                src: 'images/atomic/atomic_high_fidelity/home.jpg'
            },
            {
                title: 'Item Selected Screen',
                src: 'images/atomic/atomic_high_fidelity/item_selected.jpg'
            }            
        ],
        [
            {
                title: 'Setting Screen',
                src: 'images/atomic/atomic_high_fidelity/setting.jpg'
            },
            {
                title: 'Trip Selected Screen',
                src: 'images/atomic/atomic_high_fidelity/trip_selected.jpg'
            },
            {
                title: 'User Agreement Screen',
                src: 'images/atomic/atomic_high_fidelity/user_agreement.jpg'
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
        var animateValue = $el.attr('value');
        $el.removeClass('hide-item');
        $el.addClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function($el) {
        var animateValue = $el.attr('value');
        $el.addClass('hide-item');
        $el.removeClass('animated ' + animateValue); // this example leverages animate.css classes
    };

    $scope.parallaxTitle = {
        title: 'Project AtomiC',
        color: 'dark-grey'
    };
    $scope.listOfImages = [
        {
            imageUrl: 'http://www.daanelabs.com/wp-content/uploads/2015/02/Chemistry-Background-Light.jpg',
            additionalStyles: ''
        }
    ];     
   
}
Project2Ctrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location'];