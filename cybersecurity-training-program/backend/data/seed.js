const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Module = require('./models/Module');
const sampleModules = require('./data/modules');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Function to seed data
const seedData = async () => {
  try {
    // Clear existing modules
    await Module.deleteMany({});
    console.log('Existing modules cleared');

    // Insert new modules
    await Module.insertMany(sampleModules);
    console.log('Sample modules inserted successfully');

    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedData();