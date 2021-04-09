//import modules
const express = require('express');
const path = require('path');

const app = express();
const public = path.join(__dirname, 'public');

app.use(express.static(public));

app.get('/home', function(req, res) {
    res.sendFile(path.join(public, 'html/index.html'));
   })

app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'html/index.html'));
   })

app.use(function(req, res) {
    res.status(404);
    res.send('Oops! looks like this isn\'t a page sorry!');
}) 

app.listen(8080, function() {
    console.log('Server started on port 8080. Ctrl^c to quit.');
   })