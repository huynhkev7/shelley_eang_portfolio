'use strict';

angular.module('myApp.recoveryCtrl', [])
  .controller('RecoveryCtrl', ['$scope', '$rootScope','globalFunctions', '$location', '$sce', function($scope, $rootScope, globalFunctions, $location, $sce) {
    window.scrollTo(0, 0);
    $rootScope.showNavbar = true;
    $rootScope.currentBaseUrl =  '/home';
    $scope.videoURL = 'https://youtu.be/48piu-OeOrY';  

    $scope.surveyList = [
        'Add a card that signified a trade of cards',
        'Players were confused at the instructions of the game',
        'Players noted that the game was too general- ized and did not know it was recovery specific',
        'All players enjoyed the game and players (who originally were unac- quainted) collaborated with each other'
    ]
    
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

    $scope.competitiveGames = [
        {
            name: 'Machi Koro',
            source: 'images/recovery/competitive_games/machi_koro.jpg',
            objective: 'Earn enough coins to unlock all landmark cards',
            mechanism: 'City-building game that involves cards, dice, and currency'
        },
        {
            name: 'Forbidden Desert',
            source: 'images/recovery/competitive_games/forbidden.jpg',
            objective: 'Overcome the sand storm while facing an array of obstacles',
            mechanism: 'Cooperative game that involves board tiles, shipwreck parts, sand markers, player pieces, adventurer cards, an equipment deck, a storm deck, and a storm meter'
        },
        {
            name: 'Touring',
            source: 'images/recovery/competitive_games/touring.jpg',
            objective: 'Race to travel the furthest distance',
            mechanism: 'Card game'
        },
        {
            name: 'Santorini',
            source: 'images/recovery/competitive_games/santorini.jpg',
            objective: 'Have a player piece on a third-level elevation building block',
            mechanism: '3D city-building game that involves a board, building blocks, player pieces, and god power cards'
        },
        {
            name: 'Flip City',
            source: 'images/recovery/competitive_games/flip.jpg',
            objective: 'Build your own deck to augment your chances of winning',
            mechanism: 'City-building card game'
        },                       
        {
            name: 'Between',
            source: 'images/recovery/competitive_games/between.jpg',
            objective: 'Earn the highest points while building two cities',
            mechanism: 'City-building card game'
        }
    ];
    
    $scope.listOfRespondents = [
        {
            percentage: '65',
            desc: 'believed recovery was about returning to \“normal\"'
        },
        {
            percentage: '78',
            desc: 'like competitive games'
        },
        {
            percentage: '69',
            desc: 'like having teams'
        },
        {
            percentage: '7',
            desc: 'mentioned improvements'
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
                title: 'Coordinate Card',
                src: 'images/recovery_high_fidelity/go/coordinate_card.jpg'
            },
            {
                title: 'Freeway Card',
                src: 'images/recovery_high_fidelity/go/freeway_card.jpg'
            }       
        ],
        [
            {
                title: 'Protect Card',
                src: 'images/recovery_high_fidelity/other/protect.jpg'
            },
            {
                title: 'Trade Card',
                src: 'images/recovery_high_fidelity/other/trade.jpg'
            }       
        ],  
        [
            {
                title: 'Remove Business Card',
                src: 'images/recovery_high_fidelity/removal/remove_business.jpg'
            },
            {
                title: 'Remove Police Station Card',
                src: 'images/recovery_high_fidelity/removal/remove_police_station.jpg'
            },
            {
                title: 'Remove School Card',
                src: 'images/recovery_high_fidelity/removal/remove_school.jpg'
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
  }]);
