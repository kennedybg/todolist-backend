const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');

  return tasks;
};

const getTask = async (id) => {
  const [task] = await connection.execute('SELECT * FROM tasks WHERE id = ?', [id]);

  return task[0];
};

const createTask = async (task) => {
  const { title } = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const query = 'INSERT INTO tasks (title, status, created_at) values (?, ?, ?)';

  const [createdTask] = await connection.execute(
    query,
    [title, 'pendente', dateUTC]
  );

  return { insertId: createdTask.insertId };
};

const updateTask = async (task) => {
  const {id, title, status} = task;
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

  const [updatedTask] = await connection.execute(query,[title, status, id]);

  return updatedTask;
};

const deleteTask = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';

  const [deletedTask] = await connection.execute(query,[id]);

  return deletedTask;
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
