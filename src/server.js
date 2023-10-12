const app = require('./app');

require('dotenv').config();

const { PORT } = process.env || 3001;

app.listen(PORT, () => {
  console.log('Server running on port 3001');
});
