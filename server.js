var express = require("express");
var app = express();
app.use(express.bodyParser());
app.post('/login' , function (req , res){
    req.setEncoding('utf8');
    console.log(JSON.stringify( req.headers ));
    req.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});
app.listen(3000);
console.log('server started');




