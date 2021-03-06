console.log('qqq');
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true })); // to read url

MongoClient.connect(db.url, (err, client) => { // connect to db
  if (err) return console.log(err)
  require('./app/routes')(app, client);
  app.listen(port, () => { // start server
    console.log('We are live on ' + port);
  });               
})
