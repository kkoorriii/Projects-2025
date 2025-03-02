const Progress = require('../models/Progress');
const User = require('../models/User');
const Module = require('../models/Module');

// Get all progress for current user
exports.getUserProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ user: req.user.id })
      .populate('module', 'title type difficulty pointsValue');
    
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Record or update progress for a module
exports.recordProgress = async (req, res) => {
  try {
    const { moduleId, score, completed } = req.body;
    
    // Check if module exists
    const module = await Module.findById(moduleId);
    if (!module) {
      return res.status(404).json({ msg: 'Module not found' });
    }
    
    // Find or create progress record
    let progress = await Progress.findOne({ 
      user: req.user.id,
      module: moduleId
    });
    
    if (progress) {
      // Update existing progress
      progress.score = Math.max(progress.score, score);
      progress.completed = completed || progress.completed;
      progress.attempts += 1;
      progress.lastAttemptDate = Date.now();
    } else {
      // Create new progress entry
      progress = new Progress({
        user: req.user.id,
        module: moduleId,
        score,
        completed,
        attempts: 1
      });
    }
    
    await progress.save();
    
    // If completed with good score, update user points and badges
    if (completed && score >= 70) {
      const user = await User.findById(req.user.id);
      
      // Only award points if not already completed
      if (!progress.completed) {
        user.points += module.pointsValue;
      }
      
      // Check if user should get a badge for this module type
      const completedModulesOfType = await Progress.countDocuments({
        user: req.user.id,
        completed: true,
        module: { 
          $in: await Module.find({ type: module.type }).select('_id') 
        }
      });
      
      if (completedModulesOfType >= 3 && !user.badges.includes(`${module.type}-specialist`)) {
        user.badges.push(`${module.type}-specialist`);
      }
      
      // Check if user has completed all beginner modules
      const allBeginnerModules = await Module.find({ difficulty: 'beginner' }).select('_id');
      const completedBeginnerModules = await Progress.countDocuments({
        user: req.user.id,
        completed: true,
        module: { $in: allBeginnerModules }
      });
      
      if (completedBeginnerModules === allBeginnerModules.length && !user.badges.includes('beginner-complete')) {
        user.badges.push('beginner-complete');
      }
      
      await user.save();
    }
    
    res.json(progress);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get summary of user progress
exports.getProgressSummary = async (req, res) => {
  try {
    // Count total modules
    const totalModules = await Module.countDocuments();
    
    // Count completed modules
    const completedModules = await Progress.countDocuments({
      user: req.user.id,
      completed: true
    });
    
    // Get average score
    const progressEntries = await Progress.find({ user: req.user.id });
    const totalScore = progressEntries.reduce((sum, entry) => sum + entry.score, 0);
    const averageScore = progressEntries.length > 0 ? totalScore / progressEntries.length : 0;
    
    // Get completion by category
    const moduleTypes = ['phishing', 'malware', 'password', 'social-engineering', 'other'];
    
    const completionByType = {};
    
    for (const type of moduleTypes) {
      const totalOfType = await Module.countDocuments({ type });
      const completedOfType = await Progress.countDocuments({
        user: req.user.id,
        completed: true,
        module: { $in: await Module.find({ type }).select('_id') }
      });
      
      completionByType[type] = {
        total: totalOfType,
        completed: completedOfType,
        percentage: totalOfType > 0 ? (completedOfType / totalOfType) * 100 : 0
      };
    }
    
    res.json({
      total: {
        modules: totalModules,
        completed: completedModules,
        percentage: (completedModules / totalModules) * 100
      },
      averageScore,
      byType: completionByType
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};