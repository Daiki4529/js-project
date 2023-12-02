const { Sequelize } = require("sequelize");
var config = require("../config/config.json");

const connection = new Sequelize(
  config.MYSQL_DATABASE,
  config.MYSQL_USERNAME,
  config.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

connection.authenticate().then(() => console.log("Database is connected"));

module.exports = connection;
