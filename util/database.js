const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node", "root", "qq11qq11", {
  dialect: 'mysql',
  host:'localhost'
});

module.exports = sequelize;