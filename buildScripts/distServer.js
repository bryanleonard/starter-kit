// NOT for actual production use. This is useful for hosting the minifed build files for local debugging.

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression()); //gzip that shit
app.use(express.static('dist'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{
			"id": 100,
			"firstName":"Bob",
			"lastName":"Smith",
			"email":"bob@gmail.com"
		},
		{
			"id": 200,
			"firstName":"Tammy",
			"lastName":"Norton",
			"email":"tnorton@yahoo.com"},
		{
			"id": 300,
			"firstName":"Tina",
			"lastName":"Lee",
			"email":"lee.tina@hotmail.com"
		},
		{
			"id": 400,
			"firstName": "Finley",
			"lasttName": "Marshall",
			"email": "finleymarshall@talae.com"
		},
		{
			"id": 500,
			"firstName": "Jayne",
			"lasttName": "Norris",
			"email": "jaynenorris@talae.com"
		},
		{
			"id": 600,
			"firstName": "Gay",
			"lasttName": "Gomez",
			"email": "gaygomez@talae.com"
		},
		{
			"id": 7,
			"firstName": "Garner",
			"lasttName": "Crane",
			"email": "garnercrane@talae.com"
		},
		{
			"id": 7,
			"firstName": "Gill",
			"lasttName": "Carter",
			"email": "gillcarter@talae.com"
		},
		{
			"id": 8,
			"firstName": "Evans",
			"lasttName": "Douglas",
			"email": "evansdouglas@talae.com"
		},
		{
			"id": 9,
			"firstName": "Oneil",
			"lasttName": "Acevedo",
			"email": "oneilacevedo@talae.com"
		},
		{
			"id": 10,
			"firstName": "Holmes",
			"lasttName": "Swanson",
			"email": "holmesswanson@talae.com"
		},
		{
			"id": 11,
			"firstName": "Farley",
			"lasttName": "Fry",
			"email": "farleyfry@talae.com"
		},
		{
			"id": 12,
			"firstName": "Tammi",
			"lasttName": "Pierce",
			"email": "tammipierce@talae.com"
		},
		{
			"id": 13,
			"firstName": "Elaine",
			"lasttName": "Blake",
			"email": "elaineblake@talae.com"
		},
		{
			"id": 14,
			"firstName": "Polly",
			"lasttName": "Shepard",
			"email": "pollyshepard@talae.com"
		},
		{
			"id": 15,
			"firstName": "Camacho",
			"lasttName": "Dean",
			"email": "camachodean@talae.com"
		},
		{
			"id": 16,
			"firstName": "Patterson",
			"lasttName": "Mccarty",
			"email": "pattersonmccarty@talae.com"
		},
		{
			"id": 17,
			"firstName": "Candice",
			"lasttName": "Randolph",
			"email": "candicerandolph@talae.com"
		}
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	}
	else {
		open('http://localhost:' + port);
	}
});
