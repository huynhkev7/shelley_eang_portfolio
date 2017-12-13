'use strict';

angular.module('myApp.alaCtrl', [])
  .controller('AlaCtrl', ['$scope','$rootScope', 'globalFunctions', '$location', '$sce', function($scope, $rootScope, globalFunctions, $location, $sce) {
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
            description: 'Identify Client Goals',
            image: 'fa-search'
        },
        {
            description: 'Conduct Heuristic Evaluation',
            image: 'fa-clipboard'
        },
        {
            description: 'Explore Typography and Visual Hierarchy',
            image: 'fa-text-height'
        },
        {
            description: 'Select Brand Colors',
            image: 'fa-hand-o-up'
        },
        {
            description: 'Design New Logo',
            image: 'fa-pencil'
        },            
        {
            description: 'Develop Sitemap',
            image: 'fa-map'
        },
        {
            description: 'Design Interfaces of the Mobile and Web Prototype',
            image: 'fa-wrench'
        },
        {
            description: 'Summarize All Design and Branding Choices in Brand Book',
            image: 'fa-book'
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
        ala_banner: {
            localSrc: 'images/ala/ala_banner.jpg',
            driveSrc: '',
            title: 'Banner',
            targetModal: '#modalImageViewer'            
        },
        ala_final: {
            localSrc: 'images/ala/ala_final.jpg',
            driveSrc: '',
            title: 'Final Flyer',
            targetModal: '#modalImageViewer'            
        },
        ala_flyer: {
            localSrc: 'images/ala/ala_flyer.jpg',
            driveSrc: '',
            title: 'Final Flyer #2',
            targetModal: '#modalImageViewer'            
        },
        ala_flyer_back: {
            localSrc: 'images/ala/ala_flyer_back.jpg',
            driveSrc: '',
            title: 'Back of Flyer',
            targetModal: '#modalImageViewer'
        },
        ala_flyer_front: {
            localSrc: 'images/ala/ala_flyer_front.jpg',
            driveSrc: '',
            title: 'Front of Flyer',
            targetModal: '#modalImageViewer'
        },
        ala_logo_black: {
            localSrc: 'images/ala/ala_logo_black.jpg',
            driveSrc: '',
            title: 'ALA Logo Black',
            targetModal: '#modalImageViewer'
        },
        ala_logo_blue: {
            localSrc: 'images/ala/ala_logo_blue.jpg',
            driveSrc: '',
            title: 'ALA Logo Blue',
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
  }]);
