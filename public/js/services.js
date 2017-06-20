'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service('globalFunctions', function() {
    var showNavbar = false;
    return {
      getShowNavbar: function(){
        return showNavbar;
      },
      setShowNavbar: function(arg){
        showNavbar = arg;
      },
      getIsMobile: function(){
        return window.getComputedStyle(document.getElementsByClassName("navbar-toggle")[0]).display !== 'none';
      }
    }
  });