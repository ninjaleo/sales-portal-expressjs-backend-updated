const { retrieveUser} = require('./loginservice/getlogin');

const {saveUser} = require('./signupservice/postsignup');

const {retrieveQuote} = require('./quoteservice/getquote');

const {writeQuote} = require('./quoteservice/postquote');


module.exports = { retrieveUser, saveUser, retrieveQuote, writeQuote };