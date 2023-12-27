const Guild = require("./Guild");
const Role = require("./Role");
const Message = require("./Message");
const User = require("./User");
const UserRoleGuild = require("./UserRoleGuild");

Guild.hasMany(Role, { foreignKey: "guildId" });
Guild.hasMany(Message, { foreignKey: "guildId" });
Guild.hasMany(UserRoleGuild, { foreignKey: "guildId" });

Message.belongsTo(User, { foreignKey: "authorId" });
Message.belongsTo(Guild, { foreignKey: "guildId" });

Role.belongsTo(Guild, { foreignKey: "guildId" });
Role.hasMany(UserRoleGuild, { foreignKey: "roleId" });

User.hasMany(Message, { foreignKey: "authorId" });
User.hasMany(UserRoleGuild, { foreignKey: "username" });

UserRoleGuild.belongsTo(User, { foreignKey: "username" });
UserRoleGuild.belongsTo(Guild, { foreignKey: "guildId" });
UserRoleGuild.belongsTo(Role, { foreignKey: "roleId" });

module.exports = {
  Guild,
  Role,
  Message,
  User,
  UserRoleGuild,
};
