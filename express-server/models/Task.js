const mongoose = require('mongoose');

// shape of the data in the database
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // validation to ensure title is provided
    trim: true // no spaces at the beginning or end
  },
  description: {
    type: String,
    required: true, // validation to ensure description is provided
    trim: true // no spaces at the beginning or end
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // automatically adds createdAt and updatedAt fields
})

module.exports = mongoose.model('Task', taskSchema);