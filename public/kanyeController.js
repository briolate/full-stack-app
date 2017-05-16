var app = angular.module('kanyeMod');

app.controller('kanyeController', function($scope, kanyeFactory) {
  kanyeFactory.setLyrics().then(function() {
    $scope.lyrics = kanyeFactory.getLyrics();
    console.log($scope.lyrics);
  })
});
