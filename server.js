// Load dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');

const cakes = require('./cakes');
require('dotenv').config();

// Create express app
const app = express();

// Set the view engine
app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

// Parse all requests for url encoded form data.
app.use(express.urlencoded({ extended: true }));

// Set homepage end-point
app.get('/' || '/index', function(req, res){
  res.render('pages/index',
    {
      title: "Halo Home", 
      current: "home",
    });
});

// Set gallery end-point
app.get('/gallery', (req, res) => {
  res.render('pages/gallery',
    {
      title: "Halo Gallery", 
      current: "gallery",
    });
});

// Set subscribe end-point
app.get('/subscribe', (req, res) => {
  res.render('pages/subscribe',
    {
      title: "Halo Subscribe", 
      current: "subscribe",
    });
});

// Set JSON end-point
app.get('/api/v0/gallery', (req, res) => {
  res.json(cakes);
});

// Do something with form data
app.post('/users', function(request, response) {
  response.send(`<p>Thanks, ${request.body.name}! We'll send newsletter updates to ${request.body.email}.</p >`);
});

// Add more middleware
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 8000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
