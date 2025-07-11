const Task = require('../models/Task');

// this is  where we define our controller functions

const getAllTasks = async (req, res)  => {
  try {
    const tasks = await Task.find()
    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

const createTask = async (req, res) => {
  console.log('Request body:', req.body);
  try {
    // destructure the request body to get title and description
    const { title, description } = req.body;
    const newTask = new Task({
      title,
      description
    });
    // save the new task to the database
    const savedTask = await newTask.save()

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: savedTask
    })
  } catch (error) {
    console.error('Error creating task:', error);
  }
}

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    // find the task by id and update it
    const updatedTask = await Task.findByIdAndUpdate({_id: id}, { title, description }, { new: true });

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask
    });
  } catch (error) {
    console.error('Error updating task:', error);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask
}