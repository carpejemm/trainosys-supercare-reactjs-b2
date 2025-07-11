const express = require('express');
const router = express.Router();
const { getAllUsers, addNewUser, updateUser, deleteUser } = require('../controllers/usersController');

router.get('/', getAllUsers)
router.post('/add', addNewUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;