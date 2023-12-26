const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

router.get('/todo', todoController.getTodoList); //+middleware
router.post('/todo', todoController.createTodo);
router.put('/todo', todoController.updateTodo);
router.delete('/todo', todoController.deleteTodo);

module.exports = router;