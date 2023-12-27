const { Sequelize } = require("sequelize");
var {
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
} = require("../config/config.json");

const connection = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

connection.authenticate().then(() => console.log("Database is connected"));

module.exports = connection;
