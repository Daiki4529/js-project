const connection = require("../models/db");

require("../models/User");
require("../models/Role");
require("../models/Guild");
require("../models/Message");
require("../models/UserRoleGuild");

connection
  .sync({ alter: true })
  .then(() => console.log("Database synchronized"));