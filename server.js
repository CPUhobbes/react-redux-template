// Dependencies
const express = require('express');
const Players = require('./server/models/Players.js');
const Routes = require('./server/config/routes.js');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Promise = require('bluebird');
const Path = require('path');
    
// Express    
app = express();

// Mongoose promise
Mongoose.Promise = Promise;

// Mongoose
// mongoose.connect("mongodb://DBNAMEHERE");
Mongoose.connect("mongodb://localhost/theResistance");
const db = Mongoose.connection;

// Mongoose Error
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Mongoose Connect
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// Add Body Parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

// Add static content directory (img, css, js, etc)
app.use(express.static(Path.join(__dirname, 'client', 'public')));

// Routes
app.use('/', Routes);
 
// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
});

module.exports = app;