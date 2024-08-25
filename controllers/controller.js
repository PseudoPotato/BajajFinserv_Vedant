const User = require('../models/user');

exports.postData = async (req, res) => {
  try {
    const { data } = req.body;
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const lowercaseAlphabets = alphabets.filter((item) => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length
      ? [lowercaseAlphabets.sort().pop()]
      : [];

    const user = new User({
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    });

    await user.save();

    res.status(200).json({
      is_success: true,
      user_id: user.user_id,
      email: user.email,
      roll_number: user.roll_number,
      numbers: user.numbers,
      alphabets: user.alphabets,
      highest_lowercase_alphabet: user.highest_lowercase_alphabet,
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: 'Server Error',
    });
  }
};

exports.getOperationCode = (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
};