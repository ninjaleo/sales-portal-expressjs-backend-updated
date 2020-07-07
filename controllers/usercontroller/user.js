
const { retrieveUser } = require('../../services');
const url = require('url');


const getUser = async (req, res, next) => {

  var queryparams = url.parse(req.url, true).query;
  email = queryparams.email;
  password = queryparams.password;
  console.log(" Input parameters are : " + email + " and password :" + password);
  if (email == null || password == null) {
    res.sendStatus(401);
  }
  else {
    try {

      const result = await retrieveUser(email, password);
      console.log("Inside Controller: received response:" + result);
      res.send(result);
    }
    catch (err) {
      console.log('fetch failed', err);
    }
  }
}

module.exports = {  getUser };