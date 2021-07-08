var express = require('express');
var app = express();
console.log('Hello world')
let absolutePath = __dirname + '/views/index.html'
let assetsPath = __dirname + '/public'
app.get("/", (req,res)=>{
    res.sendFile(absolutePath)
})
let respObject = {message: "Hello json"}
app.get("/json", (req,res,next)=>{
  res.json(respObject)
})
app.use("/public",express.static(assetsPath))





























 module.exports = app;
