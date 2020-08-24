const express = require('express')

const app = express()

//Express is big chain of middleware (pipelined) we apply to incoming requests

app.use((req, res, next) => { // New Middleware
  console.log('First middleware');
  next(); // Call next if not sending a response
});

app.use((req, res, next) => { // Middleware Sending response
  res.send('Hello from express!')
});

module.exports = app; //  Exporting for Connecting the express to node server where requests are handled
