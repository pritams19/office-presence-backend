const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('../services/auth.service');

const signup = async (req, res) => {
  try {
    const { name, email, password, team, birthdate } = req.body;
    const user = await registerUser(name, email, password, team, birthdate);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { name: user.name, email: user.email, team: user.team } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { name: user.name, email: user.email, team: user.team } });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  signup,
  login,
};
