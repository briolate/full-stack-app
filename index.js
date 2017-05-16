var express = require('express');
var app = express();
var kanye = require('./kanye');

// console.log(kanye);

app.use(express.static(__dirname + '/public'));

app.get('/api/kanye-lyric', function (req, res) {
  res.send(kanye.kanyeLyrics[Math.floor(Math.random() * kanye.kanyeLyrics.length)] + " ");
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
