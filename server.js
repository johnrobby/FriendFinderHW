var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 8080;

app.get("/",function(req,res){
    res.send("app is working")
})

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:"+ PORT);
})
