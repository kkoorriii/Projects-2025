const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../middleware/auth');

// @route   POST api/users/register
// @desc    Register a user
// @access  Public
router.post('/register', userController.registerUser);

// @route   POST api/users/login
// @desc    Login user & get token
// @access  Public
router.post('/login', userController.loginUser);

// @route   GET api/users/me
// @desc    Get current user profile
// @access  Private
router.get('/me', auth, userController.getUserProfile);

// @route   GET api/users/leaderboard
// @desc    Get top users by points
// @access  Public
router.get('/leaderboard', userController.getLeaderboard);

module.exports = router;