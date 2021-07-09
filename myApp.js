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
},function (req,res,next){
    res.send({time:req.time})
    next();
})
app.get('/:word/echo',(req,res,next)=>{
    res.json({echo: req.params.word+req.params.word})
    next();
})
app.use("/public", express.static(assetsPath))

app.route('/name').get((req, res) => {
    var first = req.query.first;
    var last = req.query.last;
    var jsonObj = {name: first + ' ' + last};
    res.send(jsonObj);
  }).post();
app.listen(3000);
console.log("Server running at 3000");



























 module.exports = app;
