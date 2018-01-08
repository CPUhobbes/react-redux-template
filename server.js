// Dependencies
const express = require('express');
const app = require('express')();
const Routes = require('./server/config/routes.js');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Promise = require('bluebird');
const Path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

/**
 * --- Mongoose ---
 */

// Mongoose promise
Mongoose.Promise = Promise;

// mongoose.connect("mongodb://DBNAMEHERE");
Mongoose.connect('mongodb://localhost/theResistance');
const db = Mongoose.connection;

// Mongoose Error
db.on('error', (error) => {
  console.log('Mongoose Error: ', error);
});

// Mongoose Connect
db.once('open', () => {
  console.log('Mongoose connection successful.');
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('player_added', (msg) => {
    console.log(`Message: ${msg}`);
    io.emit('player_added', Math.random());
  });
});

// Add Body Parser
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));

// Add static content directory (img, css, js, etc)
app.use(express.static(Path.join(__dirname, 'client', 'public')));

// Routes
app.use('/', Routes);

// Server listen
http.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${process.env.PORT || 3000}`);
});

module.exports = app;
