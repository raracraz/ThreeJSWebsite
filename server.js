const express=require('express');
const serveStatic=require('serve-static');

var hostname="localhost";
var port=8080;

var app=express();

app.use(function(req,res,next){
    console.log(req.url);
    console.log(req.method);
    console.log(req.path);
    console.log(req.query.id);

    next();
});


app.use(serveStatic(__dirname+"/"));

app.listen(port,hostname,function(){
    console.log('Server hosted at http://'+hostname+':'+port);
});