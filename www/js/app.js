
var app = angular.module('sc-c3-app', ['ionic'])

app.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // TestFairy.begin("993218db594324f249e28bfa5a72f74f0d21732d");

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

    if (window.indexedDB){
      console.log("Im in WKWebView!");
    }
    else{
      console.log("im in uiwebview!");
    }
  });
})

app.constant('SCC3', {
    url: 'https://www.sc-c3.org/'
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
