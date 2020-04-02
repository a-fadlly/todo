require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'todo-dev',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  }
}