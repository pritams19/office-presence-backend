const express = require('express');
const {
  createUser,
  getUserById,
  getUserByEmail,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.get('/', getUserByEmail);

module.exports = router;
