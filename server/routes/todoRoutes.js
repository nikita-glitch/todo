const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth')

router.post('/todo', checkAuth.check, todoController.createTodo);
router.put('/todo', checkAuth.check, todoController.updateTodo);
router.delete('/todo', checkAuth.check, todoController.deleteTodo);

module.exports = router;