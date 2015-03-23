// User Model
// ----------
//
// The User model defines the structure of all of the User documents created.

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', UserSchema);
