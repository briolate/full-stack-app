var app = angular.module('kanyeMod');

app.factory('kanyeFactory', function($http) {
  var lyrics = "";

  function setLyrics() {
    var promise = $http({
      method: 'GET',
      url: '/api/kanye-lyric',
    }).then(function successCallback(response) {
      console.log(response.data);
      lyrics = response.data;
    }, function(error) {
      console.log(error);
    })
      return promise;
  };

  function getLyrics() {
    return lyrics;
  };

  return {
    setLyrics: setLyrics,
    getLyrics: getLyrics
  };
});
