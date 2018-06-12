var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Camp Gardener", image: "http://img.groundspeak.com/waymarking/display/96ce9df2-0423-42c1-ac03-f40ebb6873fa.jpg"},
		{name: "Camp Impeesa", image: "http://campimpeesa.ca/assets/image-cache/uploads/images/DSC_7654.a3555272.jpg"},
		{name: "Camp Woods", image: "http://www.bradwoods.org/wp-content/uploads/2012/02/camping.jpg"}
	]
	res.render("campgrounds", {campgrounds :campgrounds});
});

app.listen(3000, function(){
	console.log("Server started");
});