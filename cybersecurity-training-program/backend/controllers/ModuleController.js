const Module = require('../models/Module');
const Progress = require('../models/Progress');

// Get all modules
exports.getAllModules = async (req, res) => {
  try {
    const modules = await Module.find().sort({ difficulty: 1, title: 1 });
    res.json(modules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get module by ID
exports.getModuleById = async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    
    if (!module) {
      return res.status(404).json({ msg: 'Module not found' });
    }
    
    res.json(module);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Module not found' });
    }
    res.status(500).send('Server error');
  }
};

// Create a new module (admin only)
exports.createModule = async (req, res) => {
  try {
    const { title, description, content, type, difficulty, pointsValue, quizQuestions } = req.body;
    
    // Create new module
    const newModule = new Module({
      title,
      description,
      content,
      type,
      difficulty,
      pointsValue,
      quizQuestions
    });
    
    const module = await newModule.save();
    res.json(module);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get modules by difficulty
exports.getModulesByDifficulty = async (req, res) => {
  try {
    const { difficulty } = req.params;
    
    const modules = await Module.find({ difficulty }).sort({ title: 1 });
    
    res.json(modules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get modules by type
exports.getModulesByType = async (req, res) => {
  try {
    const { type } = req.params;
    
    const modules = await Module.find({ type }).sort({ difficulty: 1, title: 1 });
    
    res.json(modules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get module recommendations based on user progress
exports.getRecommendedModules = async (req, res) => {
  try {
    // Get completed modules for the user
    const completedProgress = await Progress.find({ 
      user: req.user.id,
      completed: true
    }).select('module');
    
    const completedModuleIds = completedProgress.map(p => p.module);
    
    // Get modules not completed by the user
    const recommendedModules = await Module.find({
      _id: { $nin: completedModuleIds }
    }).sort({ difficulty: 1, title: 1 }).limit(5);
    
    res.json(recommendedModules);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};