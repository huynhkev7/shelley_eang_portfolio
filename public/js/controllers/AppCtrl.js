'use strict';

angular.module('myApp.appCtrl', [])
  .controller('AppCtrl', ['$scope', '$http', '$rootScope', 'globalFunctions', '$location', function($scope, $http, $rootScope, globalFunctions, $location) {
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
    $rootScope.currentBaseUrl = '/home';
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
  }]);
