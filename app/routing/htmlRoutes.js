var express = require('express');

var app = express();

app.get("/",function(res,req){
    res.send("app is working")
})

app.listen(8080)


