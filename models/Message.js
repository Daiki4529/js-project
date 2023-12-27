const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const Guild = require("./Guild");
const User = require("./User");

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 2000],
      },
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: { model: User, key: "username" },
    },
    guildId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Guild, key: "id" },
    },
  },
  { sequelize: connection }
);

module.exports = Message;
