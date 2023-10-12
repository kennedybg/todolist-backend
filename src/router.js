const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

router.get('/tasks/:id', tasksController.getTask);

router.post('/tasks', tasksMiddleware.validateBody, tasksController.createTask);

router.put('/tasks/:id', tasksController.updateTask);

router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;
