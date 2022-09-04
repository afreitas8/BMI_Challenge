const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req,res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var bmi = weight/(height * height);
    console.log(req.body);
    res.send("Your bmi is: " + bmi);
})

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.listen(3000, function(){
    console.log("Server started on port: 3000");
} )