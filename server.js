const http = require('http')
const app = require('./Backend/app') // Import the express js module

const port = process.env.PORT || 3000;

app.set('port',port ) // Setting port for express js
const server = http.createServer(app);

server.listen(port); // Port for handling the development
