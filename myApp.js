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
    if(process.env.MESSAGE_STYLE==="uppercase"){
        respObject.message = respObject.message.toUpperCase()
        res.json(respObject)
    }
    else{
        res.json(respObject)         
    }
    next();
})

app.get("/json",(req,res,next)=>{
    console.log(req.method+" "+ req.path+" - "+req.ip);

})
app.get("/now", function (req,res,next){
    req.time = new Date().toString()
    next()
},function (req,res){
    res.send({time:req.time})
})
app.use("/public",express.static(assetsPath))





























 module.exports = app;
