const express = require('express');
const {
  markPresence,
  getUserPresence,
  getPresenceByDateRange,
  deletePresence,
  getPresenceByDate,
} = require('../controllers/presence.controller');

const router = express.Router();

router.post('/', markPresence);
router.get('/', getPresenceByDateRange); // ?start=YYYY-MM-DD&end=YYYY-MM-DD
router.get('/user/:userId', getUserPresence);
router.get('/date/:date', getPresenceByDate);
router.delete('/', deletePresence);

module.exports = router;
