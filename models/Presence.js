const mongoose = require('mongoose');

const PresenceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['present', 'not_present'],
    default: 'not_present',
  },
  period: {
    type: String,
    enum: ['all_day', 'morning', 'afternoon'],
    default: 'all_day',
  },
}, {
  timestamps: true,
});

PresenceSchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Presence', PresenceSchema);
