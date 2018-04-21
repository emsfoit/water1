const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(express.static(__dirname + `/public`));

server.get('/', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/index.html');
});

server.get('/location', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/selectArea.html');
});

server.get('/topTrucks', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/topTrucksList.html');
});

server.get('/allTrucks', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/allTrucksList.html');
});

server.get('/allPlants', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/allPlantsList.html');
});

server.get('/truckNearMe', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/truckNearMe.html');
});

server.get('/signUp', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/signUp.html');
});

server.get('/', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/selectArea.html');
});





server.listen(8080, () => console.log('Listening'));
