const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const Role = require("./Role");
const User = require("./User");
const Message = require("./Message");
const UserRoleGuild = require("./UserRoleGuild");

class Guild extends Model {}

Guild.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z\s]*$/, // Only letters and spaces
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
  }
);

module.exports = Guild;
