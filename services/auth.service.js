

const User = require('../models/User');

const registerUser = async (name, email, password, team, birthdate) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const user = new User({ name, email, password, team, birthdate });
  await user.save();
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }

  return user;
};

module.exports = {
  registerUser,
  loginUser,
};
