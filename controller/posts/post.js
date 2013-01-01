var http = require('http');
var querystring = require('querystring');
var request = require('request');
var accessToken = '';

var jsonData = { 
   username:"ben02060846@gmail.com"
  , password:"youtriate"
  , user : {
    username:"ben02060846@gmail.com"
    , password:"youtriate"
  }
  , title: 'haha my post title'
  , body: 'lol i am body'
  
};

var postdata = JSON.stringify(jsonData);
var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/articles',
  method: 'POST' , 
  headers : {
    'Content-Type': 'application/json' , 
    'Content-Length'  :  postdata.length
  }  

};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });

});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.write( postdata );
req.end();
