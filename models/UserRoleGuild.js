const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const Role = require("./Role");
const Guild = require("./Guild");
const User = require("./User");

class UserRoleGuild extends Model {}

UserRoleGuild.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: User,
        key: "username",
      },
    },
    guildId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Guild,
        key: "id",
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Role,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
  }
);

UserRoleGuild.belongsTo(User, { foreignKey: "username" });
UserRoleGuild.belongsTo(Guild, { foreignKey: "guildId" });
UserRoleGuild.belongsTo(Role, { foreignKey: "roleId" });

module.exports = UserRoleGuild;
