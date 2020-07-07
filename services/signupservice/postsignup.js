const {User} = require('../../db/index');

const saveUser = async (signupInfo) => {
    try {
      console.log("Inside DB:" + signupInfo)
      var userdoc = new User(signupInfo);
      return await userdoc.save()
        .then(data => {
          console.log("data:" + data);
          return { status: "success", message: "Your registration process completed. Please login with your credentails." };
        })
        .catch(err => {
          console.log("Error:" + err)
          var errorCode = 0
          var errorMessage = ""
          if (err.code == 11000) {
            errorCode = err.code;
            errorMessage = "Email already exists. Please use forgot password option incase if you don't remember credentails."
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
    saveUser
}