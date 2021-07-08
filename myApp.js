var express = require('express');
var app = express();
console.log('Hello world')
let absolutePath = __dirname + '/views/index.html'
let assetsPath = __dirname + '/public'
app.get("/", (req,res)=>{
    res.sendFile(absolutePath)
})

app.use("/public",express.static(assetsPath))





























 module.exports = app;
