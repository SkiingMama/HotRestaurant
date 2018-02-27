var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
// 

app.use(bodyParser.urlencoded({ entended: false}));
app.use(bodyParser.json());

// Data
var reservationArray = [];
var waitingListArray = [];

var TableReservation = function(name, phoneNumber, email, uniqueId) {
	this.name = name;
	this.phoneNumber = phoneNumber;
	this.email = email;
	this.uniqueId = uniqueId;
};

// Routes

app.get("/", function(req, res) {
	res.send("hello");
	// res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));

	// for(var i = 0; i < reservationArray.length; i++) {
	// 	return res.json(reservationArray[1]);
	// }
	return res.json(reservationArray);

});

app.post("/reserve", function(req, res) {
	var newReservation = req.body;

	console.log(newReservation)
	res.send(newReservation)
	// var tableReservation = new TableReservation(newReservation.name, newReservation.phoneNumber, newReservation.email, newReservation.uniqueId)

	// if(reservationArray.length < 6) {
	// 	reservationArray.push(tableReservation)
	// }
});


// Start server to begin listening

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});