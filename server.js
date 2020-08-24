const http = require('http')
const app = require('./Backend/app') // Import the express js module
const debug = require("debug")( "node-angular");

const port = process.env.PORT || 3000;

// Check for valid port number
const normalizedPort = val =>
{
  let port = parseInt(val,10) // radix:base

  if (isNaN(port)){
    return val;
  }
  if (port>=0) {
    return  port;
  }
  return false;
};

//Check error
const onError = error =>
{
  if(error.syscall != 'listen') {
    return error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr:"port "+port; // typeof
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges")
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind+"is already in use")
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Log when listening to incoming requests
const onListening = ()=>{
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" +addr: "port "+port;
  debug("Listening on "+bind)
};

app.set('port',port ) // Setting port for express js
const server = http.createServer(app);
// Registering listeners for error and onListening for checking the status
server.on("error",onError);
server.on("listening",onListening);
server.listen(port); // Port for handling the development


//npm install --save-dev nodemon //Automate the restart of node server once changes occur
