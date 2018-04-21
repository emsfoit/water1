const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(express.static(__dirname + `/public`));

server.get('/', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/list.html');
});





server.listen(8080, () => console.log('Listening'));
