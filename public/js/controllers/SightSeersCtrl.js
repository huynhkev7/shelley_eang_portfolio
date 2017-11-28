'use strict';

angular.module('myApp.sightSeersCtrl', [])
  .controller('SightSeersCtrl', ['$scope','$rootScope', 'globalFunctions', '$location', '$sce', function($scope, $rootScope, globalFunctions, $location, $sce) {
    window.scrollTo(0, 0);
    $rootScope.currentBaseUrl =  '/home'   
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
            image: 'fa-users'
        },
        {
            description: 'Create 2 Storyboards',
            image: 'fa-film'
        },
        {
            description: 'Develop a Sitemap',
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
        }                    
    ]

    $scope.userTestingList = {
        results: [
             "Participants displayed confusion with the \“PUBLISH & VIEW\” button",
             "Participants displayed confusion on the intuitiveness and functionality of the homepage",
             "Participants displayed confusion on the redirection of multiple pages in the system including the pages that follow \‘SEARCH\’ and \‘FRIENDS FEED\'",
             "\‘PUBLISH & VIEW\’ -> Separate \‘PREVIEW\’ button and \“PUBLISH\” button",
             "\‘FRIEND\’s FEED\’ on the homepage to \“FEED\”"
        ],
        positives: [
            "Easy use due to simplicity in screen design",
            "Covers all basic features given example problem",
            "Likes the social media sharing aspect"  
        ]
    };
    
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
  }]);
