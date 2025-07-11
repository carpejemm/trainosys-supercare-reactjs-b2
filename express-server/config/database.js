// mongoose connection configuration file
// This file is used to connect to the MongoDB database using Mongoose.
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://jemlaguda:jem12345@cluster0.yms4tgg.mongodb.net/'
    await mongoose.connect(uri)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectDB;
