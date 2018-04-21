const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(express.static(__dirname + `/public`));

server.get('/', function(req, res) {
    (res.sendFile('index.html'));
});





server.listen(8080, () => console.log('Listening'));
