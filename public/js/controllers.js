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

  $scope.scrollToTop = function(){
      window.scrollTo(0, 0);
  }
   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.
   $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
    });        

   $rootScope.$watchCollection(function () {return $location.path()}, function (newLocation, oldLocation) {
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
angular.module('myApp').controller('AppCtrl', AppCtrl);

function MyCtrl1($location, $scope, $timeout, $rootScope, globalFunctions) {
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
            url: 'images/g2l_logo.jpg',
            title: 'G2L',
            description: 'Using UX design principles, I designed and revamped a new website for a non-profit aiming to improve public health services in my local community.',
            route: '',
            tags: ['Volunteer /', 'UX ']
        },
        {
            url: 'images/avanade_logo.jpg',
            title: 'Avanade',
            description: 'I interned at Avanade, an IT consulting company focused on the Microsoft platform, where I helped design and develop the interface of a multi-million dollar application.',
            route: '',
            tags: ['Internship /', 'UX /', 'UI']
        },
        {
            url: 'images/recovery_logo.jpg',
            title: 'Recovery',
            description: 'Using a culmination of my skills in the user-centered design process, I helped design RECOVERY: Earthquake Edition, a board game that educates players about disaster recovery.',
            route: 'project1',
            tags: ['UX /', 'Visual Design /', 'Capstone']
        }            
    ]
    $scope.listOfProjects = [
        {
            url: 'images/atomic_logo.jpg',
            title: 'atomiC',
            description: 'Using my skills in UX design and user research, I helped design a mobile prototype application aimed to track carbon foot print, impose carbon taxes, and improve overall sustainability.',
            route: 'project2',
            tags: ['User Research /', 'UX /', 'Visual Design']
        },
        {
            url: 'images/sight_seers_logo.jpg',
            title: 'Sightseers',
            description: 'Through iterations of user research and usability tests, I helped develop a mobile application prototype to better document and share their travel experiences.',
            route: 'SightSeers',
            tags: ['UX /', 'User Research /', 'Usability Testing']
        },
        {
            url: 'images/wta/wta_logo.jpg',
            title: 'WTA',
            description: 'Applying principles of visual design, I developed a high-fidelity web design and mobile design mock up of a potentially improved Washington Trails Association website.',
            route: 'Wta',
            tags: ['Visual Design /', 'Information Architecture']
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
}
MyCtrl2.$inject = ['$scope', '$rootScope', 'globalFunctions', '$location'];

function ResumeCtrl($scope, $http, $rootScope, globalFunctions, $location) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/resume'
}

ResumeCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];

function Project1Ctrl($scope, $rootScope, globalFunctions, $location, $sce) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/view1';
    $scope.videoURL = 'https://youtu.be/48piu-OeOrY';  
    $scope.team = [
        {
            name: 'Shelley Eang',
            role: 'UX & Visual Designer',
        },
        {
            name: 'Michael Chen',
            role: 'User Researcher',
        },
        {
            name: 'Khalil Somani',
            role: 'Liaison & User Researcher',
        },
        {
            name: 'Amy Tang',
            role: 'Project Manager'
        }               
    ];
    $scope.responsibilities = [
        {
            description: 'Conducted Web Research and Competitive Analysis',
            image: 'fa-search'
        },
        {
            description: 'Conducted Affinity Analysis',
            image: 'fa-sticky-note-o'
        },
        {
            description: 'Created Persona and Scenarios',
            image: 'fa-users'
        },
        {
            description: 'Designed Low/High Fidelity Prototype',
            image: 'fa-pencil'
        },
        {
            description: 'Conducted and Recorded Usability Sessions',
            image: 'fa-clipboard'
        },            
        {
            description: 'Developed Product Video',
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

    $scope.modalObjects = {
        persona_1: {
            localSrc: 'images/persona_thumbnail.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4R2lxMmUyZVduWlk/preview',
            title: 'Persona',
            targetModal: '#modalIframeViewer'            
        }
    };

    $scope.trustSrc = function(src) {
        var newSrc = $sce.trustAsResourceUrl(src);
        return newSrc;
    }

    $scope.currentPrototype = {
        src: '',
        title: ''
    };

    $scope.openModal = function(src, title, modal){
        $scope.currentPrototype.src = $scope.trustSrc(src);
        $scope.currentPrototype.title = title;
        $(modal).modal('show');
    };
}
Project1Ctrl.$inject = ['$scope', '$rootScope','globalFunctions', '$location', '$sce'];

function Project2Ctrl($scope, $rootScope, globalFunctions, $location, $sce) {   
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/view1'   
    $rootScope.showNavbar = true;
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

    $scope.modalObjects = {
        persona_1: {
            localSrc: 'images/atomic/atomic_persona.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4OGlhbWlIVDNGc1U/preview',
            title: 'Persona',
            targetModal: '#modalIframeViewer'            
        },
        sitemap: {
            localSrc: 'images/atomic/sitemap.jpg',
            driveSrc: '',
            title: 'Site Map',
            targetModal: '#modalImageViewer'            
        }
    };

    $scope.trustSrc = function(src) {
        var newSrc = $sce.trustAsResourceUrl(src);
        return newSrc;
    }

    $scope.currentPrototype = {
        src: '',
        title: ''
    };

    $scope.openModal = function(src, title, modal){
        $scope.currentPrototype.src = $scope.trustSrc(src);
        $scope.currentPrototype.title = title;
        $(modal).modal('show');
    };   
}
Project2Ctrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];

function SightSeersCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/view1'   
    $rootScope.showNavbar = true; 
    $scope.team = [
        {
            name: 'Shelley Eang',
            role: 'UX Designer'
        },
        {
            name: 'Michael Fernandes',
            role: 'UX Designer'
        },
        {
            name: 'Luis Gonzales',
            role: 'UX Designer'
        }            
    ];
    $scope.responsibilities = [
        {
            description: 'Conduct Web Research',
            image: 'fa-search'
        },
        {
            description: 'Create 2 Personas and Scenarios',
            image: 'fa-sticky-note-o'
        },
        {
            description: 'Create 2 Storyboards',
            image: 'fa-users'
        },
        {
            description: 'Develop a Sitemap',
            image: 'fa-pencil'
        },
        {
            description: 'Design Screens of the Mobile Prototype',
            image: 'fa-clipboard'
        },            
        {
            description: 'Edit and Finalize Lo and Hi-Fi Design Mockups',
            image: 'fa-video-camera'
        },
        {
            description: 'Facilitate, Moderate, and Note-take Usability Studies',
            image: 'fa-video-camera'
        },
        {
            description: 'Collaborate in Creating Group Presentations',
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
                title: 'High Fidelity #1',
                src: 'images/sight_seers/high_fidelity/high_fidelity_1.jpg' 
            },
            {
                title: 'High Fidelity #2',
                src: 'images/sight_seers/high_fidelity/high_fidelity_2.jpg' 
            },
            {
                title: 'High Fidelity #3',
                src: 'images/sight_seers/high_fidelity/high_fidelity_3.jpg' 
            },
            {
                title: 'High Fidelity #4',
                src: 'images/sight_seers/high_fidelity/high_fidelity_4.jpg' 
            }           
        ],
        [
            {
                title: 'High Fidelity #5',
                src: 'images/sight_seers/high_fidelity/high_fidelity_5.jpg'
            }
        ]          
    ];

    $scope.paperPrototypes = [
        [
            {
                title: 'Paper Prototype #1',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_1.jpg' 
            },
            {
                title: 'Paper Prototype #2',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_2.jpg'
            },
            {
                title: 'Paper Prototype #3',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_3.jpg'
            },
            {
                title: 'Paper Prototype #4',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_4.jpg'
            }           
        ],
        [
            {
                title: 'Paper Prototype #5',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_5.jpg' 
            },
            {
                title: 'Paper Prototype #6',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_6.jpg'
            },
            {
                title: 'Paper Prototype #7',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_7.jpg' 
            },
            {
                title: 'Paper Prototype #8',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_8.jpg'
            }            
        ],
        [
            {
                title: 'Paper Prototype #9',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_9.jpg' 
            },
            {
                title: 'Paper Prototype #10',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_10.jpg' 
            },
            {
                title: 'Paper Prototype #11',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_11.jpg'
            }         
        ]            
    ];

    $scope.modalObjects = {
        persona_1: {
            localSrc: 'images/sight_seers/persona_1.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4QTFTR0RjUU1GTG8/preview',
            title: 'Al - Persona',
            targetModal: '#modalIframeViewer'            
        },
        persona_2: {
            localSrc: 'images/sight_seers/persona_2.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4WU9ZRDEwU2dJeUU/preview',
            title: 'Allison - Persona',
            targetModal: '#modalIframeViewer'            
        },
        sitemap: {
            localSrc: 'images/sight_seers/sitemap.jpg',
            driveSrc: '',
            title: 'Site Map',
            targetModal: '#modalImageViewer'            
        },
        al_storyboard: {
            localSrc: 'images/sight_seers/storyboards/al_storyboard.jpg',
            driveSrc: '',
            title: 'Al Storyboard',
            targetModal: '#modalImageViewer'
        },
        allison_storyboard: {
            localSrc: 'images/sight_seers/storyboards/allison.jpg',
            driveSrc: '',
            title: 'Allison Storyboard',
            targetModal: '#modalImageViewer'
        },
        amy_storyboard: {
            localSrc: 'images/sight_seers/storyboards/amy_storyboard.jpg',
            driveSrc: '',
            title: 'Amy Storyboard',
            targetModal: '#modalImageViewer'
        },
        s3_storyboard_complete: {
            localSrc: 'images/sight_seers/storyboards/s3_storyboard_complete.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4UW40eFhGUmp1dXc/preview',
            title: 'Complete Storyboard',
            targetModal: '#modalIframeViewer'
        }
    };

    $scope.trustSrc = function(src) {
        var newSrc = $sce.trustAsResourceUrl(src);
        return newSrc;
    }

    $scope.currentPrototype = {
        src: '',
        title: ''
    };

    $scope.openModal = function(src, title, modal){
        $scope.currentPrototype.src = $scope.trustSrc(src);
        $scope.currentPrototype.title = title;
        $(modal).modal('show');
    };   
}
SightSeersCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];


function WtaCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/view1'   
    $rootScope.showNavbar = true;
    $scope.team = [
        {
            name: 'Shelley Eang',
            role: 'UX Designer'
        },
        {
            name: 'Michael Fernandes',
            role: 'UX Designer'
        },
        {
            name: 'Luis Gonzales',
            role: 'UX Designer'
        }            
    ];
    $scope.responsibilities = [
        {
            description: 'Identify Client Goals',
            image: 'fa-search'
        },
        {
            description: 'Conduct Heuristic Evaluation',
            image: 'fa-sticky-note-o'
        },
        {
            description: 'Explore Typography and Visual Hierarchy',
            image: 'fa-users'
        },
        {
            description: 'Select Brand Colors',
            image: 'fa-pencil'
        },
        {
            description: 'Design New Logo',
            image: 'fa-clipboard'
        },            
        {
            description: 'Develop Sitemap',
            image: 'fa-video-camera'
        },
        {
            description: 'Design Interfaces of the Mobile and Web Prototype',
            image: 'fa-video-camera'
        },
        {
            description: 'Summarize All Design and Branding Choices in Brand Book',
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
                title: 'High Fidelity #1',
                src: 'images/sight_seers/high_fidelity/high_fidelity_1.jpg' 
            },
            {
                title: 'High Fidelity #2',
                src: 'images/sight_seers/high_fidelity/high_fidelity_2.jpg' 
            },
            {
                title: 'High Fidelity #3',
                src: 'images/sight_seers/high_fidelity/high_fidelity_3.jpg' 
            },
            {
                title: 'High Fidelity #4',
                src: 'images/sight_seers/high_fidelity/high_fidelity_4.jpg' 
            }           
        ],
        [
            {
                title: 'High Fidelity #5',
                src: 'images/sight_seers/high_fidelity/high_fidelity_5.jpg'
            }
        ]          
    ];

    $scope.paperPrototypes = [
        [
            {
                title: 'Paper Prototype #1',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_1.jpg' 
            },
            {
                title: 'Paper Prototype #2',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_2.jpg'
            },
            {
                title: 'Paper Prototype #3',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_3.jpg'
            },
            {
                title: 'Paper Prototype #4',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_4.jpg'
            }           
        ],
        [
            {
                title: 'Paper Prototype #5',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_5.jpg' 
            },
            {
                title: 'Paper Prototype #6',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_6.jpg'
            },
            {
                title: 'Paper Prototype #7',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_7.jpg' 
            },
            {
                title: 'Paper Prototype #8',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_8.jpg'
            }            
        ],
        [
            {
                title: 'Paper Prototype #9',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_9.jpg' 
            },
            {
                title: 'Paper Prototype #10',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_10.jpg' 
            },
            {
                title: 'Paper Prototype #11',
                src: 'images/sight_seers/paper_prototypes/Paper Prototype_11.jpg'
            }         
        ]            
    ];

    $scope.modalObjects = {
        text_with_image: {
            localSrc: 'images/wta/text_with_image.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4WUJmUVdETHlxbUE/preview',
            title: 'Text w/ Image',
            targetModal: '#modalIframeViewer'            
        },
        type_hierarchy: {
            localSrc: 'images/wta/type_hierarchy.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZUI0MExONTRvazg/preview',
            title: 'Typography and Hierarchy',
            targetModal: '#modalIframeViewer'            
        },
        color_and_emotion: {
            localSrc: 'images/wta/color_and_emotion.jpg',
            driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZjdNcjFPWm1sd2c/preview',
            title: 'Color and Emotion',
            targetModal: '#modalIframeViewer'            
        },
        sketch_1: {
            localSrc: 'images/wta/sketches/sketch_1.jpg',
            driveSrc: '',
            title: 'Sketch #1',
            targetModal: '#modalImageViewer'
        },
        sketch_2: {
            localSrc: 'images/wta/sketches/sketch_2.jpg',
            driveSrc: '',
            title: 'Sketch #2',
            targetModal: '#modalImageViewer'
        },
        logo_prototyping: {
            localSrc: 'images/wta/logo_prototyping/wta_logo_black.jpg',
            driveSrc: '',
            title: 'Logo',
            targetModal: '#modalImageViewer'
        },
        home_screen: {
            localSrc: 'images/wta/home_screen.jpg',
            title: 'Home Screen',
            targetModal: '#modalImageViewer'
        },
        wta_home: {
            localSrc: 'images/wta/wta_home.jpg',
            title: 'WTA Home Screen',
            targetModal: '#modalImageViewer'            
        },
        business_card: {
            localSrc: 'images/wta/wta_business_card.jpg',
            title: 'WTA Business Card',
            targetModal: '#modalImageViewer'              
        }
    };

    $scope.trustSrc = function(src) {
        var newSrc = $sce.trustAsResourceUrl(src);
        return newSrc;
    }

    $scope.currentPrototype = {
        src: '',
        title: ''
    };

    $scope.openModal = function(src, title, modal){
        $scope.currentPrototype.src = $scope.trustSrc(src);
        $scope.currentPrototype.title = title;
        $(modal).modal('show');
    };   

    $scope.videoURL  = 'https://youtu.be/thkWjcBVmL0';
}

WtaCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];
