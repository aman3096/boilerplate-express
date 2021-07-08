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
    if(process.env.MESSAGE_STYLE=="uppercase"){
        respObject.message = respObject.message.toUpperCase()
        return res.json(respObject)
    }
    else{
        return res.json(respObject)
    }
})
app.use("/public",express.static(assetsPath))





























 module.exports = app;
