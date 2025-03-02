const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/ModuleController');
const auth = require('../middleware/auth');

// @route   GET api/modules
// @desc    Get all modules
// @access  Public
router.get('/', moduleController.getAllModules);

// @route   GET api/modules/:id
// @desc    Get module by ID
// @access  Public
router.get('/:id', moduleController.getModuleById);

// @route   POST api/modules
// @desc    Create a module
// @access  Private (admin only - to be enhanced)
router.post('/', auth, moduleController.createModule);

// @route   GET api/modules/difficulty/:difficulty
// @desc    Get modules by difficulty
// @access  Public
router.get('/difficulty/:difficulty', moduleController.getModulesByDifficulty);

// @route   GET api/modules/type/:type
// @desc    Get modules by type
// @access  Public
router.get('/type/:type', moduleController.getModulesByType);

// @route   GET api/modules/recommended
// @desc    Get recommended modules for user
// @access  Private
router.get('/recommended', auth, moduleController.getRecommendedModules);

module.exports = router;