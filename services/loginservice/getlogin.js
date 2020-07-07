const {User} = require('../../db/index');


const retrieveUser = async (email, password) => {
    try {

      console.log("Date is:" + Date.now());
      var query = { 'email': email, 'password': password };
      return await User.findOneAndUpdate(query, { 'lastLoginDate': Date.now() }).select({ "username": 1, "lastLoginDate": 1, "_id": 0 })
        .then(
          data => {
            if (data !== null) {
              console.log("user login data is:" + data)
              const { username, lastLoginDate } = data;
              const responseData = { status: "success", username, lastLoginDate }
              return responseData;
            }
            else {
              console.log("User Not Found");
              const responseData = { status: "failed", message: "User Not Found. Please Check Your Credentials and Retry" }
              return responseData;
            }
          })
        .catch(
          error => {
            console.log("error while retriving the user info:" + error)
            throw new error(error);
          })
    }
    catch (error) {
      console.log(error);
      throw new error(error);
    }
  
  };

  module.exports = { retrieveUser };