const express = require('express');
const app = express();
const configApp = require('./config/app');

app.get('/', function(req, res) {
    res.send(`Welcome to ${configApp.name}`);
});

app.listen(configApp.port, function() {
    console.log(`App listening at http://localhost:${configApp.port}`);
});