const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("twist/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://pomyoOliver:Rocketscience101!@ds125225.mlab.com:25225/heroku_89rlngxw");

// Start the API server
app.listen(PORT, function() {
  console.log(` 🌎  ==> API Server now listening on PORT ${PORT}`);
});