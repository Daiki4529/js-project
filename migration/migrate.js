const connection = require("../models/db");

require("../models/associations");

connection
  .sync({ alter: true })
  .then(() => console.log("Database synchronized"));
