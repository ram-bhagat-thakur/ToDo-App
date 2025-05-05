const express = require("express");
const bodyParser=require("body-parser");
var app=express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

var items=[];

app.get("/",function(req,res){
    //console.log(items);
    res.render("list",{ejes:items});
});

app.post("/",function(req,res){
    var item=req.body;
    console.log(item);
    items.push(item);
    res.redirect("/");
})



app.listen(8000,function(){
    console.log("Server Started");
})
