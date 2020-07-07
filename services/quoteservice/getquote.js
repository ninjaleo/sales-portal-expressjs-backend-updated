const { Quote } = require('../../db');

const retrieveQuote = async (email) => {
  try {
    console.log("Date is:" + Date.now());
    var query = { 'userEmail': email };
    return await Quote.find(query)
      .then(
        data => {
          if (data !== null) {
            console.log("Quote details " + data)
            const { username, lastLoginDate } = data;
            const responseData = data;
            return responseData;
          }
          else {
            console.log("Quotes Not Found");
            const responseData = { status: "failed", message: "No quotes submitted yet." }
            return responseData;
          }
        })
      .catch(
        error => {
          console.log("error while retriving the quote info:" + error)
          throw new error(error);
        })
  }
  catch (error) {
    console.log(error);
    throw new error(error);
  }

};


module.exports = {
    retrieveQuote
}