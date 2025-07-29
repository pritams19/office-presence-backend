const Presence = require('../models/Presence');
//require('../models/User');

const markPresence = async (userId, date, status, period = 'all_day') => {
  const dateOnlyString = new Date(date).toISOString().split('T')[0]; // "YYYY-MM-DD"
  const normalizedDate = new Date(dateOnlyString); // parsed as UTC midnight

  return await Presence.findOneAndUpdate(
    { userId, date: normalizedDate },
    { status, period },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
};

const getUserPresence = async (userId) => {
  return await Presence.find({ userId }).sort({ date: 1 });
};

const getPresenceByDateRange = async (startDate, endDate) => {
  return await Presence.find({
    date: { $gte: startDate, $lte: endDate },
  }).populate('userId', 'name email team').sort({ date: 1 });
};

const getPresenceByDate = async (date) => {
  return await Presence.find({ date })
    .populate('userId', 'name email team')
    .sort({ 'userId.name': 1 });
};

const deletePresence = async (userId, date) => {
  return await Presence.findOneAndDelete({ userId, date });
};

module.exports = {
  markPresence,
  getUserPresence,
  getPresenceByDateRange,
  getPresenceByDate,
  deletePresence,
};
