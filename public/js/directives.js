'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);


angular.module('myApp.directives', ['ngAnimate']).
  directive('projectItem', ['version', function(version) {
    return {
        restrict: 'EA',
        templateUrl: 'templates/partial1.html',
        scope: {
          url: '@',
          title: '@',
          description: '@',
          route: '@'
        },
        controller: function($scope, $location){
          $scope.isActive = true;
          $scope.mouseEnterProjectImage = function(element, wrapperEl){
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            var offSetLeft = element.offsetLeft;
            var wrapperEl = element.nextElementSibling;
            var $wrapperEl = angular.element(wrapperEl);
            $wrapperEl.css({"height": height + 'px', "width": width + 'px', "left": offSetLeft + 'px', "top": '0px'});
            $scope.isActive = false;
            
          }
          $scope.mouseLeaveProjectImage = function(){
           $scope.isActive = true;
          }
          $scope.goToProject = function() {
            $location.path('/' + $scope.route);
          }
        },
        link: function ($scope, element, attrs) {
            
            // element.bind('click', function () {
            //     element.html('You clicked me!');
            // });
            // element.bind('mouseenter', function () {
            //     element.css('background-color', 'yellow');
            // });
            // element.bind('mouseleave', function () {
            //     element.css('background-color', 'white');
            // });
        }

    };
    // return function(scope, elm, attrs) {
    //   elm.text(version);
    // };
  }]);
