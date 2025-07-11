const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users
    })
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

const addNewUser = async(req, res) => {
  try {
    // destructure the request body
    const { name, email } = req.body;

    const newUser = new User({
      name,
      email
    })

    const saveUser = await newUser.save();

    res.status(201).json({
      status: 'success',
      data: saveUser
    })
  } catch (error) {
    console.error('Error adding new user:', error);
  }
}

const updateUser = async (req, res) => {
  console.log('Request Body:', req.body);
  try {
    const { id } = req.params;
    console.log('User ID:', id); // 686f5a2821854579d9e0ce2a

    const updateUser = await User.findOneAndUpdate({_id: id}, req.body, { new: true}) // new true return the updated document

    res.status(200).json({
      status: 'success',
      data: updateUser
    })

  } catch (error) {
    console.error('Error updating user:', error);
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // 686f5b2b21854579d9e0ce30
    const deletedUser = await User.findOneAndDelete({ _id: id });

    if (!deleteUser) {
      return res.status(404).json({
        status: 'failed',
        message: 'User not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

module.exports = {
  getAllUsers,
  addNewUser,
  updateUser,
  deleteUser
}