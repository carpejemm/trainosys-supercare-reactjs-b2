const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, updateTask } = require('../controllers/tasksController');

// chain controller functions to handle requests
// /api/v1/tasks/all
router.get('/all', getAllTasks); 
router.post('/create', createTask)
router.patch('/:id', updateTask)


module.exports = router;