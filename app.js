var express = require('express');
var app = express();

var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Camp Gardener", image: "http://img.groundspeak.com/waymarking/display/96ce9df2-0423-42c1-ac03-f40ebb6873fa.jpg"},
	{name: "Camp Impeesa", image: "http://campimpeesa.ca/assets/image-cache/uploads/images/DSC_7654.a3555272.jpg"},
	{name: "Camp Woods", image: "http://www.bradwoods.org/wp-content/uploads/2012/02/camping.jpg"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds :campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);

	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("Server started");
});