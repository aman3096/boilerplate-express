var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}))

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
    next();

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

app.get('/name', function(req, res){
    let first = req.query.first;
    let last = req.query.last;
    let jsonObj = {name: first + " " + last};
    res.send(jsonObj);
});
app.post("/name", function(req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
});
app.listen(3000);
console.log("Server running at 3000");



























 module.exports = app;
