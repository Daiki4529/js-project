const { Model, DataTypes } = require("sequelize");
const connection = require("./db");
const bcrypt = require("bcryptjs");
const Message = require("./Message");
const UserRoleGuild = require("./UserRoleGuild");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        is: /^(?=.{2,32}$)(?!(?:everyone|here)$)\.?[a-z0-9_]+(?:\.[a-z0-9_]+)*\.?$/,
        // 2-32 chars
        // cannot be "everyone" or "here"
        // only numbers and letters, dots, and underscore
        // lowercase
        // no spaces
        // no double dots
      },
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { len: [1, 32] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32],
        is: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^((\+)33|0|0033)[1-9](\d{2}){4}$/,
      },
    },
    nitro: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
  }
);

User.hasMany(Message, { foreignKey: "authorId" });
User.hasMany(UserRoleGuild, { foreignKey: "username" });
User.addHook("beforeCreate", (user) => {
  user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
});

User.addHook("beforeUpdate", (user, options) => {
  if (options.fields.includes("password")) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  }
});

module.exports = User;
