
var twitterApp = angular.module('twitterApp', []);

var userTweets = {};

var followingTweets = {};

twitterApp.run(['$http', function($http) {
  $http.get("php/getTweets.php").success(function(data) {
    userTweets.tweets = data;
  });
}]);


twitterApp.controller('MainPageCtrl', 
    ['$scope','$http', function($scope, $http) {
  $scope.userTweets = userTweets;
  
  // acquire search suggestion
  $("#search-input").keyup(function() {
    var inputKey = $(this).val();
    if (inputKey.length == 1) {
      $.get("php/SuggestKey.php")
        .done(function(data) {
          var parsedKeys = JSON.parse(data);
          var suggestKeys = [];
          for (var key in parsedKeys) {
            suggestKeys.push(parsedKeys[key])
          }
          $scope.suggestKeys = suggestKeys;
        });
      $scope.$apply();
      $("#search-result").removeClass("hide");
    } 
    
    if (inputKey.length == 0) {
      $("#search-result").addClass("hide");
    }
  });

  $scope.getError = function(error) {
    if (angular.isDefined(error)) {
      if (error.required) {
        return "Please enter a value";
      } else if (error.email) {
        return "Please enter a valid email address";
      }
    }
  }

  $scope.login = function(user) {
    console.log(user.email);
    console.log(user.password);
    $.post("php/login.php", 
        {email: user.email, password: user.password})
      .done(function(data) {
        alert(data);
      });
  }
}]);


twitterApp.controller('UserPanelCtrl', 
    ['$scope', '$http', function($scope, $http) {
  $scope.followingTweets = followingTweets;

}]);
