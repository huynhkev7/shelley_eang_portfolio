'use strict';

/* Controllers */

// function AppCtrl($scope, $http, $rootScope, globalFunctions, $location) {
//   $http({method: 'GET', url: '/api/name'}).
//   success(function(data, status, headers, config) {
//     $scope.name = data.name;
//   }).
//   error(function(data, status, headers, config) {
//     $scope.name = 'Error!'
//   });
//   var isMobile = globalFunctions.getIsMobile();

//   if(globalFunctions.getIsMobile()){
//       $rootScope.showNavbar = true;
//   }else{
//       $rootScope.showNavbar = false;
//   };
//   $rootScope.currentBaseUrl = '/home';
//   $scope.routeTo = function(route){
//       angular.element( document.querySelector( '.navbar-collapse' ) ).addClass('collapse');
//       angular.element( document.querySelector( '.navbar-collapse' ) ).removeClass('in');
//       window.scrollTo(0, 0);
//       $location.path('/' + route);
//   }

//   $scope.scrollToTop = function(){
//       window.scrollTo(0, 0);
//   }
//    //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
//    //bind in induvidual controllers.
//    $rootScope.$on('$locationChangeSuccess', function() {
//         $rootScope.actualLocation = $location.path();
//     });        

//    $rootScope.$watchCollection(function () {return $location.path()}, function (newLocation, oldLocation) {
//        window.scrollTo(0, 0);
//         if($rootScope.actualLocation === newLocation) {
//             //alert('Why did you use history back?');
//             var $modalBackDrop = document.getElementsByClassName('modal-backdrop fade in');
//             if($modalBackDrop){
//                 angular.element($modalBackDrop).remove()
//                 angular.element(document.getElementsByClassName('modal-open')).removeClass('modal-open');
//             }
//         }
//     });  
    
// }

// AppCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];
// angular.module('myApp').controller('AppCtrl', AppCtrl);


// function MyCtrl2($scope, $rootScope, globalFunctions, $location) {
//     $rootScope.currentBaseUrl =  $location.path();    
//     $rootScope.showNavbar = true;
// }
// MyCtrl2.$inject = ['$scope', '$rootScope', 'globalFunctions', '$location'];

// function ResumeCtrl($scope, $http, $rootScope, globalFunctions, $location) {
//     window.scrollTo(0, 0);
//     $rootScope.showNavbar = true;
//     $rootScope.currentBaseUrl =  '/resume'
// }

//ResumeCtrl.$inject = ['$scope', '$http', '$rootScope', 'globalFunctions', '$location'];

// function RecoveryCtrl($scope, $rootScope, globalFunctions, $location, $sce) {
//     window.scrollTo(0, 0);
//     $rootScope.showNavbar = true;
//     $rootScope.currentBaseUrl =  '/home';
//     $scope.videoURL = 'https://youtu.be/48piu-OeOrY';  
//     $scope.team = [
//         {
//             name: 'Shelley Eang',
//             role: 'UX & Visual Designer',
//         },
//         {
//             name: 'Michael Chen',
//             role: 'User Researcher',
//         },
//         {
//             name: 'Khalil Somani',
//             role: 'Liaison & User Researcher',
//         },
//         {
//             name: 'Amy Tang',
//             role: 'Project Manager'
//         }               
//     ];
//     $scope.responsibilities = [
//         {
//             description: 'Conducted Web Research and Competitive Analysis',
//             image: 'fa-search'
//         },
//         {
//             description: 'Conducted Affinity Analysis',
//             image: 'fa-sticky-note-o'
//         },
//         {
//             description: 'Created Persona and Scenarios',
//             image: 'fa-users'
//         },
//         {
//             description: 'Designed Low/High Fidelity Prototype',
//             image: 'fa-pencil'
//         },
//         {
//             description: 'Conducted and Recorded Usability Sessions',
//             image: 'fa-clipboard'
//         },            
//         {
//             description: 'Developed Product Video',
//             image: 'fa-video-camera'
//         }     
//     ]

//     $scope.competitiveGames = [
//         {
//             name: 'Machi Koro',
//             source: 'images/recovery/competitive_games/machi_koro.jpg',
//             objective: 'Earn enough coins to unlock all landmark cards',
//             mechanism: 'City-building game that involves cards, dice, and currency'
//         },
//         {
//             name: 'Forbidden Desert',
//             source: 'images/recovery/competitive_games/forbidden.jpg',
//             objective: 'Overcome the sand storm while facing an array of obstacles',
//             mechanism: 'Cooperative game that involves board tiles, shipwreck parts, sand markers, player pieces, adventurer cards, an equipment deck, a storm deck, and a storm meter'
//         },
//         {
//             name: 'Touring',
//             source: 'images/recovery/competitive_games/touring.jpg',
//             objective: 'Race to travel the furthest distance',
//             mechanism: 'Card game'
//         },
//         {
//             name: 'Santorini',
//             source: 'images/recovery/competitive_games/santorini.jpg',
//             objective: 'Have a player piece on a third-level elevation building block',
//             mechanism: '3D city-building game that involves a board, building blocks, player pieces, and god power cards'
//         },
//         {
//             name: 'Flip City',
//             source: 'images/recovery/competitive_games/flip.jpg',
//             objective: 'build your own deck to augment your chances of winning',
//             mechanism: 'city-building card game'
//         },                       
//         {
//             name: 'Between',
//             source: 'images/recovery/competitive_games/between.jpg',
//             objective: 'Earn the highest points while building two cities',
//             mechanism: 'city-building card game'
//         }
//     ];
    
//     $scope.listOfRespondents = [
//         {
//             percentage: '65',
//             desc: 'believed recovery was about returning to \“normal\"'
//         },
//         {
//             percentage: '78',
//             desc: 'like competitive games'
//         },
//         {
//             percentage: '69',
//             desc: 'like having teams'
//         },
//         {
//             percentage: '7',
//             desc: 'mentioned improvements'
//         }
//     ]
//     $scope.lowFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Performing Arts Card',
//                 src: 'images/improvement/performing_arts.jpg'
//             },
//             {
//                 title: 'Solar Panel Card',
//                 src: 'images/improvement/solar_panel.jpg'
//             },
//             {
//                 title: 'Stadium Card',
//                 src: 'images/improvement/stadium_card.jpg'
//             },
//             {
//                 title: 'Tourist Attraction Card',
//                 src: 'images/improvement/tourist_attraction.jpg'
//             }            
//         ]        
//     ];

//     $scope.highFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city_high_fidelity/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city_high_fidelity/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city_high_fidelity/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city_high_fidelity/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community_high_fidelity/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community_high_fidelity/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community_high_fidelity/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community_high_fidelity/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Decision Reached Card',
//                 src: 'images/solution/decision_reached.jpg'
//             },
//             {
//                 title: 'Funds Acquired Card',
//                 src: 'images/solution/funds_acquired.jpg'
//             },
//             {
//                 title: 'Tow Truck Card',
//                 src: 'images/solution/tow_truck.jpg'
//             }         
//         ],
//         [
//             {
//                 title: 'Coordinate Card',
//                 src: 'images/recovery_high_fidelity/go/coordinate_card.jpg'
//             },
//             {
//                 title: 'Freeway Card',
//                 src: 'images/recovery_high_fidelity/go/freeway_card.jpg'
//             }       
//         ],
//         [
//             {
//                 title: 'Protect Card',
//                 src: 'images/recovery_high_fidelity/other/protect.jpg'
//             },
//             {
//                 title: 'Trade Card',
//                 src: 'images/recovery_high_fidelity/other/trade.jpg'
//             }       
//         ],  
//         [
//             {
//                 title: 'Remove Business Card',
//                 src: 'images/recovery_high_fidelity/removal/remove_business.jpg'
//             },
//             {
//                 title: 'Remove Police Station Card',
//                 src: 'images/recovery_high_fidelity/removal/remove_police_station.jpg'
//             },
//             {
//                 title: 'Remove School Card',
//                 src: 'images/recovery_high_fidelity/removal/remove_school.jpg'
//             }                  
//         ],                      
//         [
//             {
//                 title: 'Back of Card',
//                 src: 'images/back_of_card.jpg'
//             }      
//         ]              
//     ];

//     $scope.modalObjects = {
//         persona_1: {
//             localSrc: 'images/persona_thumbnail.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4R2lxMmUyZVduWlk/preview',
//             title: 'Persona',
//             targetModal: '#modalIframeViewer'            
//         }
//     };

//     $scope.trustSrc = function(src) {
//         var newSrc = $sce.trustAsResourceUrl(src);
//         return newSrc;
//     }

//     $scope.currentPrototype = {
//         src: '',
//         title: ''
//     };

//     $scope.openModal = function(src, title, modal){
//         $scope.currentPrototype.src = $scope.trustSrc(src);
//         $scope.currentPrototype.title = title;
//         $(modal).modal('show');
//     };
// }
// RecoveryCtrl.$inject = ['$scope', '$rootScope','globalFunctions', '$location', '$sce'];

// function AtomicCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
//     window.scrollTo(0, 0);
//     $rootScope.currentBaseUrl =  '/home'   
//     $rootScope.showNavbar = true;
//     $scope.team = [
//         {
//             name: 'Shelley Eang',
//             role: 'Visual & UX Design'
//         },
//         {
//             name: 'Sean Hoon',
//             role: 'Project Manager'
//         },
//         {
//             name: 'Michael Kozlowski',
//             role: 'Technical Writer'
//         },
//         {
//             name: 'Lacey Peil',
//             role: 'Visual Design & Research'
//         }               
//     ];
//     $scope.responsibilities = [
//         {
//             description: 'Conducting Web Research and Competitive Analysis',
//             image: 'fa-search'
//         },
//         {
//             description: 'Create Persona and Scenarios',
//             image: 'fa-users'
//         },
//         {
//             description: 'Develop Sitemap',
//             image: 'fa-map'
//         },
//         {
//             description: 'Design Screens of the Mobile Prototype',
//             image: 'fa-pencil'
//         },
//         {
//             description: 'Edit and Finalize Lo and Hi-Fi Design Mockups',
//             image: 'fa-wrench'
//         },            
//         {
//             description: 'Facilitate, Moderate, and Note-take Usability Studies',
//             image: 'fa-clipboard'
//         },
//         {
//             description: 'Collaborate in Creating Group Presentations',
//             image: 'fa-file-powerpoint-o'
//         },
//         {
//             description: 'Contribute and Finalize Final Report',
//             image: 'fa-book'
//         }                    
//     ]
    
        
//     $scope.listOfRespondents = [
//         {
//             percentage: '5 out of 6',
//             desc: 'Were supportive of a carbon tax'
//         },
//         {
//             percentage: '3 out of 6',
//             desc: 'Would not pay for an application that tracks carbon output'
//         }
//     ];

//     $scope.lowFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Performing Arts Card',
//                 src: 'images/improvement/performing_arts.jpg'
//             },
//             {
//                 title: 'Solar Panel Card',
//                 src: 'images/improvement/solar_panel.jpg'
//             },
//             {
//                 title: 'Stadium Card',
//                 src: 'images/improvement/stadium_card.jpg'
//             },
//             {
//                 title: 'Tourist Attraction Card',
//                 src: 'images/improvement/tourist_attraction.jpg'
//             }            
//         ]        
//     ];

//     $scope.highFidelityPrototypes = [
//         [
//             {
//                 title: 'Carbon ID Screen',
//                 src: 'images/atomic/atomic_high_fidelity/carbon_id.jpg'
//             },
//             {
//                 title: 'Create Account Screen',
//                 src: 'images/atomic/atomic_high_fidelity/create_account.jpg'
//             },
//             {
//                 title: 'Entering Atomic Screen',
//                 src: 'images/atomic/atomic_high_fidelity/entering_atomic.jpg'
//             },
//             {
//                 title: 'Food Data Screen',
//                 src: 'images/atomic/atomic_high_fidelity/food_data.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Food Reports Screen',
//                 src: 'images/atomic/atomic_high_fidelity/food_reports.jpg'
//             },
//             {
//                 title: 'Food Screen',
//                 src: 'images/atomic/atomic_high_fidelity/food.jpg'
//             },
//             {
//                 title: 'Home Screen',
//                 src: 'images/atomic/atomic_high_fidelity/home.jpg'
//             },
//             {
//                 title: 'Item Selected Screen',
//                 src: 'images/atomic/atomic_high_fidelity/item_selected.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Setting Screen',
//                 src: 'images/atomic/atomic_high_fidelity/setting.jpg'
//             },
//             {
//                 title: 'Trip Selected Screen',
//                 src: 'images/atomic/atomic_high_fidelity/trip_selected.jpg'
//             },
//             {
//                 title: 'User Agreement Screen',
//                 src: 'images/atomic/atomic_high_fidelity/user_agreement.jpg'
//             }         
//         ]            
//     ];

//     $scope.modalObjects = {
//         persona_1: {
//             localSrc: 'images/atomic/atomic_persona.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4OGlhbWlIVDNGc1U/preview',
//             title: 'Persona',
//             targetModal: '#modalIframeViewer'            
//         },
//         sitemap: {
//             localSrc: 'images/atomic/sitemap.jpg',
//             driveSrc: '',
//             title: 'Site Map',
//             targetModal: '#modalImageViewer'            
//         },
//         brainstorm: [
//             {
//                 localSrc: 'images/atomic/brainstorm/sketch_1.jpg',
//                 driveSrc: '',
//                 title: 'Brainstorm Sketch #1',
//                 targetModal: '#modalImageViewer'       
//             },
//             {
//                 localSrc: 'images/atomic/brainstorm/sketch_2.jpg',
//                 driveSrc: '',
//                 title: 'Brainstorm Sketch #2',
//                 targetModal: '#modalImageViewer'       
//             },
//             {
//                 localSrc: 'images/atomic/brainstorm/sketch_3.jpg',
//                 driveSrc: '',
//                 title: 'Brainstorm Sketch #3',
//                 targetModal: '#modalImageViewer'       
//             },     
//             {
//                 localSrc: 'images/atomic/brainstorm/sketch_4.jpg',
//                 driveSrc: '',
//                 title: 'Brainstorm Sketch #4',
//                 targetModal: '#modalImageViewer'       
//             },                       
//         ]
//     };

//     $scope.trustSrc = function(src) {
//         var newSrc = $sce.trustAsResourceUrl(src);
//         return newSrc;
//     }

//     $scope.currentPrototype = {
//         src: '',
//         title: ''
//     };

//     $scope.openModal = function(src, title, modal){
//         $scope.currentPrototype.src = $scope.trustSrc(src);
//         $scope.currentPrototype.title = title;
//         $(modal).modal('show');
//     };   
// }
// AtomicCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];

// function SightSeersCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
//     window.scrollTo(0, 0);
//     $rootScope.currentBaseUrl =  '/home'   
//     $rootScope.showNavbar = true; 
//     $scope.team = [
//         {
//             name: 'Shelley Eang',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Michael Fernandes',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Luis Gonzales',
//             role: 'UX Designer'
//         }            
//     ];
//     $scope.responsibilities = [
//         {
//             description: 'Conduct Web Research',
//             image: 'fa-search'
//         },
//         {
//             description: 'Create 2 Personas and Scenarios',
//             image: 'fa-users'
//         },
//         {
//             description: 'Create 2 Storyboards',
//             image: 'fa-film'
//         },
//         {
//             description: 'Develop a Sitemap',
//             image: 'fa-map'
//         },
//         {
//             description: 'Design Screens of the Mobile Prototype',
//             image: 'fa-pencil'
//         },            
//         {
//             description: 'Edit and Finalize Lo and Hi-Fi Design Mockups',
//             image: 'fa-wrench'
//         },
//         {
//             description: 'Facilitate, Moderate, and Note-take Usability Studies',
//             image: 'fa-clipboard'
//         },
//         {
//             description: 'Collaborate in Creating Group Presentations',
//             image: 'fa-file-powerpoint-o'
//         }                    
//     ]

//     $scope.userTestingList = {
//         results: [
//              "Participants displayed confusion with the \“PUBLISH & VIEW\” button",
//              "Participants displayed confusion on the intuitiveness and functionality of the homepage",
//              "Participants displayed confusion on the redirection of multiple pages in the system including the pages that follow \‘SEARCH\’ and \‘FRIENDS FEED\'",
//              "\‘PUBLISH & VIEW\’ -> Separate \‘PREVIEW\’ button and \“PUBLISH\” button",
//              "\‘FRIEND\’s FEED\’ on the homepage to \“FEED\”"
//         ],
//         positives: [
//             "Easy use due to simplicity in screen design",
//             "Covers all basic features given example problem",
//             "Likes the social media sharing aspect"  
//         ]
//     };
    
//     $scope.lowFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Performing Arts Card',
//                 src: 'images/improvement/performing_arts.jpg'
//             },
//             {
//                 title: 'Solar Panel Card',
//                 src: 'images/improvement/solar_panel.jpg'
//             },
//             {
//                 title: 'Stadium Card',
//                 src: 'images/improvement/stadium_card.jpg'
//             },
//             {
//                 title: 'Tourist Attraction Card',
//                 src: 'images/improvement/tourist_attraction.jpg'
//             }            
//         ]        
//     ];

//     $scope.highFidelityPrototypes = [
//         [
//             {
//                 title: 'High Fidelity #1',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_1.jpg' 
//             },
//             {
//                 title: 'High Fidelity #2',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_2.jpg' 
//             },
//             {
//                 title: 'High Fidelity #3',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_3.jpg' 
//             },
//             {
//                 title: 'High Fidelity #4',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_4.jpg' 
//             }           
//         ],
//         [
//             {
//                 title: 'High Fidelity #5',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_5.jpg'
//             }
//         ]          
//     ];

//     $scope.paperPrototypes = [
//         [
//             {
//                 title: 'Paper Prototype #1',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_1.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #2',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_2.jpg'
//             },
//             {
//                 title: 'Paper Prototype #3',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_3.jpg'
//             },
//             {
//                 title: 'Paper Prototype #4',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_4.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Paper Prototype #5',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_5.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #6',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_6.jpg'
//             },
//             {
//                 title: 'Paper Prototype #7',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_7.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #8',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_8.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Paper Prototype #9',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_9.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #10',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_10.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #11',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_11.jpg'
//             }         
//         ]            
//     ];

//     $scope.modalObjects = {
//         persona_1: {
//             localSrc: 'images/sight_seers/persona_1.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4QTFTR0RjUU1GTG8/preview',
//             title: 'Al - Persona',
//             targetModal: '#modalIframeViewer'            
//         },
//         persona_2: {
//             localSrc: 'images/sight_seers/persona_2.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4WU9ZRDEwU2dJeUU/preview',
//             title: 'Allison - Persona',
//             targetModal: '#modalIframeViewer'            
//         },
//         sitemap: {
//             localSrc: 'images/sight_seers/sitemap.jpg',
//             driveSrc: '',
//             title: 'Site Map',
//             targetModal: '#modalImageViewer'            
//         },
//         al_storyboard: {
//             localSrc: 'images/sight_seers/storyboards/al_storyboard.jpg',
//             driveSrc: '',
//             title: 'Al Storyboard',
//             targetModal: '#modalImageViewer'
//         },
//         allison_storyboard: {
//             localSrc: 'images/sight_seers/storyboards/allison.jpg',
//             driveSrc: '',
//             title: 'Allison Storyboard',
//             targetModal: '#modalImageViewer'
//         },
//         amy_storyboard: {
//             localSrc: 'images/sight_seers/storyboards/amy_storyboard.jpg',
//             driveSrc: '',
//             title: 'Amy Storyboard',
//             targetModal: '#modalImageViewer'
//         },
//         s3_storyboard_complete: {
//             localSrc: 'images/sight_seers/storyboards/s3_storyboard_complete.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4UW40eFhGUmp1dXc/preview',
//             title: 'Complete Storyboard',
//             targetModal: '#modalIframeViewer'
//         }
//     };

//     $scope.trustSrc = function(src) {
//         var newSrc = $sce.trustAsResourceUrl(src);
//         return newSrc;
//     }

//     $scope.currentPrototype = {
//         src: '',
//         title: ''
//     };

//     $scope.openModal = function(src, title, modal){
//         $scope.currentPrototype.src = $scope.trustSrc(src);
//         $scope.currentPrototype.title = title;
//         $(modal).modal('show');
//     };   
// }
// SightSeersCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];


// function WtaCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
//     window.scrollTo(0, 0);
//     $rootScope.currentBaseUrl =  '/home'   
//     $rootScope.showNavbar = true;
//     $scope.team = [
//         {
//             name: 'Shelley Eang',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Michael Fernandes',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Luis Gonzales',
//             role: 'UX Designer'
//         }            
//     ];
//     $scope.responsibilities = [
//         {
//             description: 'Identify Client Goals',
//             image: 'fa-search'
//         },
//         {
//             description: 'Conduct Heuristic Evaluation',
//             image: 'fa-clipboard'
//         },
//         {
//             description: 'Explore Typography and Visual Hierarchy',
//             image: 'fa-text-height'
//         },
//         {
//             description: 'Select Brand Colors',
//             image: 'fa-hand-o-up'
//         },
//         {
//             description: 'Design New Logo',
//             image: 'fa-pencil'
//         },            
//         {
//             description: 'Develop Sitemap',
//             image: 'fa-map'
//         },
//         {
//             description: 'Design Interfaces of the Mobile and Web Prototype',
//             image: 'fa-wrench'
//         },
//         {
//             description: 'Summarize All Design and Branding Choices in Brand Book',
//             image: 'fa-book'
//         }                    
//     ]

    
//     $scope.lowFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Performing Arts Card',
//                 src: 'images/improvement/performing_arts.jpg'
//             },
//             {
//                 title: 'Solar Panel Card',
//                 src: 'images/improvement/solar_panel.jpg'
//             },
//             {
//                 title: 'Stadium Card',
//                 src: 'images/improvement/stadium_card.jpg'
//             },
//             {
//                 title: 'Tourist Attraction Card',
//                 src: 'images/improvement/tourist_attraction.jpg'
//             }            
//         ]        
//     ];

//     $scope.highFidelityPrototypes = [
//         [
//             {
//                 title: 'High Fidelity #1',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_1.jpg' 
//             },
//             {
//                 title: 'High Fidelity #2',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_2.jpg' 
//             },
//             {
//                 title: 'High Fidelity #3',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_3.jpg' 
//             },
//             {
//                 title: 'High Fidelity #4',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_4.jpg' 
//             }           
//         ],
//         [
//             {
//                 title: 'High Fidelity #5',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_5.jpg'
//             }
//         ]          
//     ];

//     $scope.paperPrototypes = [
//         [
//             {
//                 title: 'Paper Prototype #1',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_1.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #2',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_2.jpg'
//             },
//             {
//                 title: 'Paper Prototype #3',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_3.jpg'
//             },
//             {
//                 title: 'Paper Prototype #4',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_4.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Paper Prototype #5',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_5.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #6',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_6.jpg'
//             },
//             {
//                 title: 'Paper Prototype #7',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_7.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #8',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_8.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Paper Prototype #9',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_9.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #10',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_10.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #11',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_11.jpg'
//             }         
//         ]            
//     ];

//     $scope.modalObjects = {
//         text_with_image: {
//             localSrc: 'images/wta/text_with_image.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4WUJmUVdETHlxbUE/preview',
//             title: 'Text w/ Image',
//             targetModal: '#modalIframeViewer'            
//         },
//         type_hierarchy: {
//             localSrc: 'images/wta/type_hierarchy.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZUI0MExONTRvazg/preview',
//             title: 'Typography and Hierarchy',
//             targetModal: '#modalIframeViewer'            
//         },
//         color_and_emotion: {
//             localSrc: 'images/wta/color_and_emotion.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZjdNcjFPWm1sd2c/preview',
//             title: 'Color and Emotion',
//             targetModal: '#modalIframeViewer'            
//         },
//         sketch_1: {
//             localSrc: 'images/wta/sketches/sketch_1.jpg',
//             driveSrc: '',
//             title: 'Sketch #1',
//             targetModal: '#modalImageViewer'
//         },
//         sketch_2: {
//             localSrc: 'images/wta/sketches/sketch_2.jpg',
//             driveSrc: '',
//             title: 'Sketch #2',
//             targetModal: '#modalImageViewer'
//         },
//         logo_prototyping: {
//             localSrc: 'images/wta/logo_prototyping/wta_logo_black.jpg',
//             driveSrc: '',
//             title: 'Logo',
//             targetModal: '#modalImageViewer'
//         },
//         home_screen: {
//             localSrc: 'images/wta/home_screen.jpg',
//             title: 'Home Screen',
//             targetModal: '#modalImageViewer'
//         },
//         wta_home: {
//             localSrc: 'images/wta/wta_home.jpg',
//             title: 'WTA Home Screen',
//             targetModal: '#modalImageViewer'            
//         },
//         business_card: {
//             localSrc: 'images/wta/wta_business_card.jpg',
//             title: 'WTA Business Card',
//             targetModal: '#modalImageViewer'              
//         }
//     };

//     $scope.trustSrc = function(src) {
//         var newSrc = $sce.trustAsResourceUrl(src);
//         return newSrc;
//     }

//     $scope.currentPrototype = {
//         src: '',
//         title: ''
//     };

//     $scope.openModal = function(src, title, modal){
//         $scope.currentPrototype.src = $scope.trustSrc(src);
//         $scope.currentPrototype.title = title;
//         $(modal).modal('show');
//     };   

//     $scope.videoURL  = 'https://youtu.be/thkWjcBVmL0';
// }

// WtaCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];


// function SgiCtrl($scope, $rootScope, globalFunctions, $location, $sce) {   
//     alert("entering sgi!");
//     window.scrollTo(0, 0);
//     $rootScope.currentBaseUrl =  '/home'   
//     $rootScope.showNavbar = true;
//     $scope.team = [
//         {
//             name: 'Shelley Eang',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Michael Fernandes',
//             role: 'UX Designer'
//         },
//         {
//             name: 'Luis Gonzales',
//             role: 'UX Designer'
//         }            
//     ];
//     $scope.responsibilities = [
//         {
//             description: 'Identify Client Goals',
//             image: 'fa-search'
//         },
//         {
//             description: 'Conduct Heuristic Evaluation',
//             image: 'fa-clipboard'
//         },
//         {
//             description: 'Explore Typography and Visual Hierarchy',
//             image: 'fa-text-height'
//         },
//         {
//             description: 'Select Brand Colors',
//             image: 'fa-hand-o-up'
//         },
//         {
//             description: 'Design New Logo',
//             image: 'fa-pencil'
//         },            
//         {
//             description: 'Develop Sitemap',
//             image: 'fa-map'
//         },
//         {
//             description: 'Design Interfaces of the Mobile and Web Prototype',
//             image: 'fa-wrench'
//         },
//         {
//             description: 'Summarize All Design and Branding Choices in Brand Book',
//             image: 'fa-book'
//         }                    
//     ]

    
//     $scope.lowFidelityPrototypes = [
//         [
//             {
//                 title: 'Business Card',
//                 src: 'images/city/business.jpg'
//             },
//             {
//                 title: 'House Card',
//                 src: 'images/city/house_card.jpg'
//             },
//             {
//                 title: 'Fire Station Card',
//                 src: 'images/city/police_fire_station.jpg'
//             },
//             {
//                 title: 'School Card',
//                 src: 'images/city/school.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Airport Card',
//                 src: 'images/community/airport.jpg'
//             },
//             {
//                 title: 'Light Rail Card',
//                 src: 'images/community/light_rail.jpg'
//             },
//             {
//                 title: 'Medical Center Card',
//                 src: 'images/community/medical_center.jpg'
//             },
//             {
//                 title: 'Sewage System Card',
//                 src: 'images/community/sewage_system.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Performing Arts Card',
//                 src: 'images/improvement/performing_arts.jpg'
//             },
//             {
//                 title: 'Solar Panel Card',
//                 src: 'images/improvement/solar_panel.jpg'
//             },
//             {
//                 title: 'Stadium Card',
//                 src: 'images/improvement/stadium_card.jpg'
//             },
//             {
//                 title: 'Tourist Attraction Card',
//                 src: 'images/improvement/tourist_attraction.jpg'
//             }            
//         ]        
//     ];

//     $scope.highFidelityPrototypes = [
//         [
//             {
//                 title: 'High Fidelity #1',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_1.jpg' 
//             },
//             {
//                 title: 'High Fidelity #2',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_2.jpg' 
//             },
//             {
//                 title: 'High Fidelity #3',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_3.jpg' 
//             },
//             {
//                 title: 'High Fidelity #4',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_4.jpg' 
//             }           
//         ],
//         [
//             {
//                 title: 'High Fidelity #5',
//                 src: 'images/sight_seers/high_fidelity/high_fidelity_5.jpg'
//             }
//         ]          
//     ];

//     $scope.paperPrototypes = [
//         [
//             {
//                 title: 'Paper Prototype #1',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_1.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #2',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_2.jpg'
//             },
//             {
//                 title: 'Paper Prototype #3',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_3.jpg'
//             },
//             {
//                 title: 'Paper Prototype #4',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_4.jpg'
//             }           
//         ],
//         [
//             {
//                 title: 'Paper Prototype #5',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_5.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #6',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_6.jpg'
//             },
//             {
//                 title: 'Paper Prototype #7',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_7.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #8',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_8.jpg'
//             }            
//         ],
//         [
//             {
//                 title: 'Paper Prototype #9',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_9.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #10',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_10.jpg' 
//             },
//             {
//                 title: 'Paper Prototype #11',
//                 src: 'images/sight_seers/paper_prototypes/Paper Prototype_11.jpg'
//             }         
//         ]            
//     ];

//     $scope.modalObjects = {
//         text_with_image: {
//             localSrc: 'images/wta/text_with_image.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4WUJmUVdETHlxbUE/preview',
//             title: 'Text w/ Image',
//             targetModal: '#modalIframeViewer'            
//         },
//         type_hierarchy: {
//             localSrc: 'images/wta/type_hierarchy.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZUI0MExONTRvazg/preview',
//             title: 'Typography and Hierarchy',
//             targetModal: '#modalIframeViewer'            
//         },
//         color_and_emotion: {
//             localSrc: 'images/wta/color_and_emotion.jpg',
//             driveSrc: 'https://drive.google.com/file/d/0B02JzOinFmv4ZjdNcjFPWm1sd2c/preview',
//             title: 'Color and Emotion',
//             targetModal: '#modalIframeViewer'            
//         },
//         sketch_1: {
//             localSrc: 'images/wta/sketches/sketch_1.jpg',
//             driveSrc: '',
//             title: 'Sketch #1',
//             targetModal: '#modalImageViewer'
//         },
//         sketch_2: {
//             localSrc: 'images/wta/sketches/sketch_2.jpg',
//             driveSrc: '',
//             title: 'Sketch #2',
//             targetModal: '#modalImageViewer'
//         },
//         logo_prototyping: {
//             localSrc: 'images/wta/logo_prototyping/wta_logo_black.jpg',
//             driveSrc: '',
//             title: 'Logo',
//             targetModal: '#modalImageViewer'
//         },
//         home_screen: {
//             localSrc: 'images/wta/home_screen.jpg',
//             title: 'Home Screen',
//             targetModal: '#modalImageViewer'
//         },
//         wta_home: {
//             localSrc: 'images/wta/wta_home.jpg',
//             title: 'WTA Home Screen',
//             targetModal: '#modalImageViewer'            
//         },
//         business_card: {
//             localSrc: 'images/wta/wta_business_card.jpg',
//             title: 'WTA Business Card',
//             targetModal: '#modalImageViewer'              
//         }
//     };

//     $scope.trustSrc = function(src) {
//         var newSrc = $sce.trustAsResourceUrl(src);
//         return newSrc;
//     }

//     $scope.currentPrototype = {
//         src: '',
//         title: ''
//     };

//     $scope.openModal = function(src, title, modal){
//         $scope.currentPrototype.src = $scope.trustSrc(src);
//         $scope.currentPrototype.title = title;
//         $(modal).modal('show');
//     };   

//     $scope.videoURL  = 'https://youtu.be/thkWjcBVmL0';
// }

// SgiCtrl.$inject = ['$scope','$rootScope', 'globalFunctions', '$location', '$sce'];