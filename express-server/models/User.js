const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // validation to ensure name is provided
    trim: true // no spaces at the beginning or end
  },
  email: {
    type: String,
    required: true, // validation to ensure email is provided
    unique: true, // email must be unique
    trim: true, // no spaces at the beginning or end
    lowercase: true // convert email to lowercase
  }
}, 
{
  timestamps: true // automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);