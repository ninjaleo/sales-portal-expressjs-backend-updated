const { Quote } = require('../../db');
const { quoteutil } = require('../../utils')

const writeQuote = async (quoteInfo) => {
    try {
        console.log("Inside Service:"+JSON.stringify(quoteInfo));
        var interestRate = 12.5;
        var calculateQuoteInfo = quoteutil.calculatedQuoteInfo(quoteInfo,interestRate);
        var quoteinfoSaved = await saveQuoteDetails(calculateQuoteInfo);    
        return quoteinfoSaved;
    } catch (e) {
        console.log("Error:" + e.message)
        throw new Error(e);

    }
}

const saveQuoteDetails = async (quoteInfo) => {
    try {
      console.log("Inside DB:" + quoteInfo)
      var quotedoc = new Quote(quoteInfo);
      return await quotedoc.save()
        .then(data => {
          console.log("data:" + data);          
          return { data };
        })
        .catch(err => {
          console.log("Error:" + err)
          var errorCode = 0
          var errorMessage = ""
          if (err.code == 11000) {
            errorCode = err.code;
            errorMessage = "Quote not saved."
          }
          else {
            errorCode = err.code;
            errorMessage = err.message;
          }
          return {
            status: "failed",
            code: errorCode,
            message: errorMessage
  
          }
        })
    }
    catch (e) {
      console.log(e);
      throw new error(e);
    }
  
  };



module.exports = {
    writeQuote
}