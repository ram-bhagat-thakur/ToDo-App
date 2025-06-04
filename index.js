const express = require("express");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const items=[];
let id=0;
app.get("/",function(req,res){
    res.render("list",{ejes:items});
});

app.post("/", function(req, res) {
    const item = {
        id: id++,  
        todo: req.body.todo,
        priority: req.body.priority
    };
    items.push(item);
    res.redirect("/");
});


app.post("/delete", function(req, res) {
    const itemId = parseInt(req.body.id);
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items.splice(index, 1);
    }
    res.redirect("/");
});


app.post("/update", function(req, res) {
    const itemId = parseInt(req.body.id);
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items[index].todo = req.body.todo;
        items[index].priority = req.body.priority;
    }
    res.redirect("/");
});




app.listen(8000,function(){
    console.log("Server Started");
})
