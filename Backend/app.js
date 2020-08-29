const express = require('express');

const bodyParser = require("body-parser")
const app = express();

/*
CORS - Cross Origin Resource Sharing
* Separated Server and Client(Angular-Localhost:4200) and Server(nodejs -Localhost:3000) leads to CORS error
* Inorder to expose api to all possible clients with different domains which do not run on the server
* Solution - add appropriate Headers in the server side response
*/

app.use(bodyParser.json()) // To get a express middle ware to parse the JSON data
app.use(bodyParser.urlencoded({ extended: false})) // to parse the URL encoded data


app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin',"*"); // Allowing all domains to access the resources
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type, Accept"); // Allowing Domains sending requests with certain headers
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS"); // Allowing HTTP words used to send request
  next();
});

// npm install --save body-parser => Script to extract the post request data and add it to request object
app.post('/api/posts',(req,res,next) =>
{
  const post = req.body;
  console.log(post)
  res.status(201).json({
    message:'Post added successfully'
});
});
//Express is big chain of middleware (pipelined) we apply to incoming requests
app.get('/api/posts',(req, res, next) => { // Middleware Sending response
  const posts = [
    {
      id:'12345asd',
      title :'First server side post',
      content :'coming from server'
    },
    {
      id: '12345asdas',
      title: 'Second server side post',
      content: 'coming from server!'
    }
  ];
  res.status(200).json(
    {
      messsage:'posts successfull !',
      posts: posts
    }
  );
});

module.exports = app; //  Exporting for Connecting the express to node server where requests are handled
