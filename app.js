const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes')

const Note = require('./db/models/note.js').Note;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/login', routes)
app.post('/signup', routes)
app.post('/createQuote', routes)
app.get('/getQuotes', routes)
app.get('/user', routes)
app.delete('/user/:email',routes)

// app.get('/notes', (req, res) => {
//   Note.find()
//     .then((notes) => res.status(200).send(notes))
//     .catch((err) => res.status(400).send(err));
// });



module.exports = app;
