var http = require('http');
var querystring = require('querystring');
var request = require('request');
var accessToken = '';

var jsonData = 
{
    post:"haha  my post" , 
    user: {
        name:"ben02060846@gmail.com",
        accessToken: accessToken

    }
};
var postdata = JSON.stringify(jsonData);
var options = {
  hostname: 'localhost',
  port: 3000,
  path: '/post',
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
