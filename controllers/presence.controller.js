const presenceService = require('../services/presence.service');

const markPresence = async (req, res) => {
  try {
    const { userId, date, status, period = 'all_day' } = req.body;
    const result = await presenceService.markPresence(userId, new Date(date), status, period);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark presence' });
  }
};

const getUserPresence = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await presenceService.getUserPresence(userId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user presence' });
  }
};

const getPresenceByDateRange = async (req, res) => {
  try {
    const { start, end } = req.query;

    if (!start || !end || isNaN(new Date(start)) || isNaN(new Date(end))) {
      return res.status(400).json({ error: 'Invalid start or end date' });
    }

    const result = await presenceService.getPresenceByDateRange(new Date(start), new Date(end));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch presence data' });
  }
};

const deletePresence = async (req, res) => {
  try {
    const { userId, date } = req.body;
    await presenceService.deletePresence(userId, new Date(date));
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete presence' });
  }
};

const getPresenceByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const targetDate = new Date(date);

    if (!date || isNaN(targetDate)) {
      return res.status(400).json({ error: 'Invalid date' });
    }

    const result = await presenceService.getPresenceByDate(targetDate);
    res.json(result);
  } catch (err) {
    console.error('Error fetching presence by date:', err);
    res.status(500).json({ error: 'Failed to fetch presence data for date' });
  }
};

module.exports = {
  markPresence,
  getUserPresence,
  getPresenceByDateRange,
  deletePresence,
  getPresenceByDate
};
