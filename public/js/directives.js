'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
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
        }
    }
  }]).
  directive('multiParallax', ['version', function(version) {
    return {
        restrict: 'EA',
        templateUrl: 'templates/multiParallax.html',
        scope: {
          imageurls: '@'
        },
        controller: function($scope, $location){
            //set the image background for each parallax layer
            $scope.imageurls = JSON.parse($scope.imageurls);
            var layers = document.querySelectorAll("[data-type='parallax']");
            for(var i = 0; i < $scope.imageurls.length; i++){
              var currentImageUrl = $scope.imageurls[i];
              var $currentLayer = angular.element(layers[i]);
              var urlValue = "url(\'" + currentImageUrl + "\')";
              if(i === 0){
                // /urlValue += ' no-repeat center bottom/cover'
                $currentLayer.css({
                  'background': urlValue
                })
              }else{
              $currentLayer.css({
                  'backgroundImage': urlValue
                })
              }
              console.log(currentImageUrl);
            }

            //parallax logic
            window.addEventListener('scroll', function(event) {
                var depth, i, layer, layers, len, movement, topDistance, translate3d;
                topDistance = this.pageYOffset;
                layers = document.querySelectorAll("[data-type='parallax']");
                for (i = 0, len = layers.length; i < len; i++) {
                    layer = layers[i];
                    depth = layer.getAttribute('data-depth');
                    movement = -(topDistance * depth);
                    translate3d = 'translate3d(0, ' + movement + 'px, 0)';
                    layer.style['-webkit-transform'] = translate3d;
                    layer.style['-moz-transform'] = translate3d;
                    layer.style['-ms-transform'] = translate3d;
                    layer.style['-o-transform'] = translate3d;
                    layer.style.transform = translate3d;
                }
            });              
        }
    }
  }])