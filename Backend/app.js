const express = require('express')

const app = express()

//Express is big chain of middleware (pipelined) we apply to incoming requests

app.use('/api/posts',(req, res, next) => { // Middleware Sending response
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
