const tasksModel = require('../models/tasksModel');

const getAll = async (request, response) => {
  const tasks = await tasksModel.getAll();
  return response.status(200).json(tasks);
};

const getTask = async (request, response) => {
  const { id } = request.params;
  const task = await tasksModel.getTask(id);
  return response.status(200).json(task);
};

const createTask = async (request, response) => {
  const createdTask = await tasksModel.createTask(request.body);
  return response.status(201).json(createdTask);
};

const updateTask = async (request, response) => {
  const { id } = request.params;
  const { title, status }= request.body;
  await tasksModel.updateTask({id, title, status});
  return response.status(204).json();
};

const deleteTask = async (request, response) => {
  await tasksModel.deleteTask(request.params.id);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
