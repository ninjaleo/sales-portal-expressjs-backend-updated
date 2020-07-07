const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes')
const logger = require('./utils/logger');


//const Note = require('./db/models/note.js').Note;

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

app.get("/", async (request, response) => {
    try {
        response.send("OK");
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(3001, () => {
    logger.info("xpress Application Server");
    console.log("Express Application Server Is Running At Port 3001");
});



module.exports = app;
