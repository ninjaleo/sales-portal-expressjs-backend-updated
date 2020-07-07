const {retrieveQuote, writeQuote} = require('../../services')

const url = require('url');

const Express = require("express");

const saveQuote = async (req, res, next) => {
  try {
    console.log("Inside Controller:")
    var quoteinfoSaved = await writeQuote(req.body);
    res.send(quoteinfoSaved);
  } catch (e) {
    console.log("error is:" + e);
  }
}


const getQuotes = async (req, res, next) => {

   var queryparams = url.parse(req.url, true).query;
  email = queryparams.userEmail;

  console.log("Inside the Controller : the mail ID passed is "+ email);

  if (email == null) {
    res.sendStatus(401);
  }
  else {
    try {
      console.log("Inside the Controller : the mail ID passed is"+email);
      const result = await retrieveQuote(email);
      console.log("Inside Controller: received response:" + result);
      res.send(result);
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}


module.exports = {
  saveQuote,
  getQuotes
}