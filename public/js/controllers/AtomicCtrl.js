'use strict';

angular.module('myApp.atomicCtrl', [])
  .controller('AtomicCtrl', ['$scope','$rootScope', 'globalFunctions', '$location', '$sce', function($scope, $rootScope, globalFunctions, $location, $sce) {
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/home'   
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
            image: 'fa-users'
        },
        {
            description: 'Develop Sitemap',
            image: 'fa-map'
        },
        {
            description: 'Design Screens of the Mobile Prototype',
            image: 'fa-pencil'
        },
        {
            description: 'Edit and Finalize Lo and Hi-Fi Design Mockups',
            image: 'fa-wrench'
        },            
        {
            description: 'Facilitate, Moderate, and Note-take Usability Studies',
            image: 'fa-clipboard'
        },
        {
            description: 'Collaborate in Creating Group Presentations',
            image: 'fa-file-powerpoint-o'
        },
        {
            description: 'Contribute and Finalize Final Report',
            image: 'fa-book'
        }                    
    ]
    
        
    $scope.listOfRespondents = [
        {
            percentage: '5 out of 6',
            desc: 'Were supportive of a carbon tax'
        },
        {
            percentage: '3 out of 6',
            desc: 'Would not pay for an application that tracks carbon output'
        }
    ];

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
        },
        brainstorm: [
            {
                localSrc: 'images/atomic/brainstorm/sketch_1.jpg',
                driveSrc: '',
                title: 'Brainstorm Sketch #1',
                targetModal: '#modalImageViewer'       
            },
            {
                localSrc: 'images/atomic/brainstorm/sketch_2.jpg',
                driveSrc: '',
                title: 'Brainstorm Sketch #2',
                targetModal: '#modalImageViewer'       
            },
            {
                localSrc: 'images/atomic/brainstorm/sketch_3.jpg',
                driveSrc: '',
                title: 'Brainstorm Sketch #3',
                targetModal: '#modalImageViewer'       
            },     
            {
                localSrc: 'images/atomic/brainstorm/sketch_4.jpg',
                driveSrc: '',
                title: 'Brainstorm Sketch #4',
                targetModal: '#modalImageViewer'       
            },                       
        ]
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
  }]);
