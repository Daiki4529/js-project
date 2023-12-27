const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const Guild = require("./Guild");
const UserRoleGuild = require("./UserRoleGuild");
class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    guildId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Guild, key: "id" },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
  }
);


module.exports = Role;
