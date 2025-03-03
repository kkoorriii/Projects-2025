const express = require('express');
const router = express.Router();
const progressController = require('../controllers/ProgressController');
const auth = require('../middleware/auth');

// All progress routes require authentication
router.use(auth);

// @route   GET api/progress
// @desc    Get all progress for current user
// @access  Private
router.get('/', progressController.getUserProgress);

// @route   POST api/progress
// @desc    Record progress for a module
// @access  Private
router.post('/', progressController.recordProgress);

// @route   GET api/progress/summary
// @desc    Get progress summary
// @access  Private
router.get('/summary', progressController.getProgressSummary);

module.exports = router;