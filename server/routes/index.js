const express = require('express')
const router = express.Router();
const todoRouter = require('./todoRoutes');
const userRouter = require('./userRoutes');

router.use('/todos', todoRouter);
router.use('/user', userRouter);

module.exports = router;