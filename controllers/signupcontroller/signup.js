
const { signuputil } = require('../../utils')
const { saveUser } = require('../../services')

const signupUser = async (req, res, next) => {
    try {
        console.log("inside")
        console.log(req.body)
       // var signupInfo = JSON.stringify(req.body);
        var signupInfo = signuputil.formatSignupInfo(req.body);
        const { email, password } = signupInfo;
        console.log ("email and password"+email+password);
        console.log("signupInfo:" + signupInfo);
        var userinfo = await saveUser(signupInfo);
        res.send(userinfo);
    } catch (e) {
        console.log("error is:" + e);
    }
}

module.exports = {
    signupUser
}