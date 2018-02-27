
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;

var reservationArray = [];
var waitingListArray = [];

var TableReservation = function(name, phoneNumber, email, uniqueId) {

    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.uniqueId = uniqueId;
};


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {

	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});



app.get('/tables', function(req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));


	// for(var i = 0; i < reservationArray.length; i++) {
	// 	return res.json(reservationArray[1]);
	// }
	// return res.json(reservationArray);

});

app.post("/newreservation", function(req, res) {
	var newReservation = req.body;

	console.log(newReservation)
	res.send(newReservation)

	var tableReservation = new TableReservation(newReservation.name, newReservation.phoneNumber, newReservation.email, newReservation.uniqueId)

	if(reservationArray.length < 6) {
		reservationArray.push(tableReservation)
	} else {
		waitingListArray.push(tableReservation)
	}
});


app.get('/api/tables', function (req, res) {
  // console.log('table data requested');
  // var response = "testing";
  res.json(reservationArray);
});

// reserve API call
app.post('/api/reserve', function (req, res) {
	console.log('reserve request submitted');
	console.log(req.body);

  var newReservation = req.body;

	console.log(newReservation)
	res.send(newReservation)
	var tableReservation = new TableReservation(newReservation.name, newReservation.phoneNumber, newReservation.email, newReservation.uniqueId)

	if(reservationArray.length < 6) {
		reservationArray.push(tableReservation)
	} else {
		waitingListArray.push(tableReservation)
	}
  console.log(reservationArray)
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
