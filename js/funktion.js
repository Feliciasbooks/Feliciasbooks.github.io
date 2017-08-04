  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzuwSYolCfADgoF_V9-J_2jG7bmYCrp0M",
    authDomain: "bockerfelicia.firebaseapp.com",
    databaseURL: "https://bockerfelicia.firebaseio.com",
    projectId: "bockerfelicia",
    storageBucket: "bockerfelicia.appspot.com",
    messagingSenderId: "508307535727"
  };
  firebase.initializeApp(config);



var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
var ref = firebase.database().ref().child("kommentarer");
 return $firebaseArray(ref);
  }
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
  
  $scope.addComment = function() {
   $scope.kommentarer.$add($scope.kommentar);
          $scope.kommentar = {
          text: "",
          skribent: ""
      };
    };
});
