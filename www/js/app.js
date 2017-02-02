// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('sc-c3-app', ['ionic'])

app.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.constant('SCC3', {
    url: 'http://sc-c3-staging.herokuapp.com/'
});

//

app.controller('theCtrl', function($scope, $rootScope, $ionicPlatform, SCC3) {
  //--Initially open the inappbrowser
  var options = "location=no,closebuttoncaption=Home";

  $ionicPlatform.ready(function() {
      $scope.goToSite();

  });


  //--Have button to re-open the browser if closed
  $scope.goToSite = function() {
    var inAppBrowser = window.open(SCC3.url, '_blank', options);
    inAppBrowser.addEventListener('exit', function(event) {
        $scope.goToSite();
    });
  };

});
