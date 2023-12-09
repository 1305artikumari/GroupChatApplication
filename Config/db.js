const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user', 'root', 'Arti@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;