var http = require('http');
var querystring = require('querystring');
var request = require('request');
var accessToken = '';


var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET' 
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {

    var jsonData = JSON.parse(chunk);
    console.log(jsonData.title);
    console.log();

    for (var i = 0 ; i < jsonData.posts.length; i++) {
        console.log(jsonData.posts[i].user);
        console.log(jsonData.posts[i].post);
        console.log(jsonData.posts[i].time);
    };

  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.end();
