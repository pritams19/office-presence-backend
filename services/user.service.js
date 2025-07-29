const User = require('../models/User');

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const createUser = async (data) => {
  // Password will be hashed in the model via pre-save middleware
  const user = new User(data);
  return await user.save();
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
};
