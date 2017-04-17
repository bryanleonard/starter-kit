import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
	// Hard coding for simplicity. Pretend this hits a real database
	res.json([
		{
			"id": ,
			"firstName":"Bob",
			"lastName":"Smith",
			"email":"bob@gmail.com"
		},
		{
			"id": 2,
			"firstName":"Tammy",
			"lastName":"Norton",
			"email":"tnorton@yahoo.com"},
		{
			"id": 3,
			"firstName":"Tina",
			"lastName":"Lee",
			"email":"lee.tina@hotmail.com"
		},
		{
			"id": 4,
			"firstName": "Finley",
			"lasttName": "Marshall",
			"email": "finleymarshall@talae.com"
		},
		{
			"id": 5,
			"firstName": "Jayne",
			"lasttName": "Norris",
			"email": "jaynenorris@talae.com"
		},
		{
			"id": 6,
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
