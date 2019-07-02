const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("Home.ejs");
});

app.get("/HowTutoringSessionWork", function(req,res){
    res.render("Home.ejs");
});

app.get("/LandingPageRamseyTutoring", function(req,res){
    res.render("Home.ejs");
});



app.get("/login", function(req,res){
    res.render("Login.ejs");
});

app.get("/signup", function(req,res){
    res.render("Signup.ejs");
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");
})
