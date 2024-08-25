const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: String,
  email: String,
  roll_number: String,
  numbers: [String],
  alphabets: [String],
  highest_lowercase_alphabet: [String],
});

module.exports = mongoose.model('User', UserSchema);