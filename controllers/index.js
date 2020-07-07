const { validateUser} = require('./logincontroller/login');
const { saveQuote, getQuotes} = require('./quotecontroller/quote');
const {signupUser} = require('./signupcontroller/signup');
const { getUser} = require('./usercontroller/user');


module.exports = { validateUser, signupUser,saveQuote, getQuotes, getUser }