const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, indexes: true },
    password: String,
    username: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    region: String,
    zip: String,
    country: String,
    registeredDate: { type: Date, default: Date.now },
    lastLoginDate: { type: Date }
});

const User = mongoose.model('user', UserSchema)

module.exports = { User };