const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
  },
  team: {
    type: String,
    enum: ['Engineering', 'Design', 'Marketing', 'Sales', 'Operations'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
