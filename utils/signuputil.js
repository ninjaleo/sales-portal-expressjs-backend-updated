const formatSignupInfo = (signupinfo) => {
    console.log(signupinfo);
    const { addressLine1, addressLine2, city, region, zip, country } = signupinfo.addresses[signupinfo.address];
    const result = {
        "email": signupinfo.email,
        "password": signupinfo.password,
        "username": signupinfo.username,
        "addressLine1": addressLine1,
        "addressLine2": addressLine2,
        "city": city,
        "region": region,
        "zip": zip,
        "country": country
    }
    console.log("Formated Signup Info is:" + signupinfo);
    return result;
}

module.exports = {
    formatSignupInfo
}