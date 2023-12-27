const { UserRoleGuild } = require("../models/associations");

const getAllURGs = async (req, res, next) => {
  try {
    const userRoleGuilds = await UserRoleGuild.findAll();
    res.json(userRoleGuilds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getURGById = async (req, res, next) => {
  try {
    const userRoleGuild = await UserRoleGuild.findByPk(req.params.id);
    if (userRoleGuild) {
      res.json(userRoleGuild);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

const createURG = async (req, res, next) => {
  try {
    const newUserRoleGuild = await UserRoleGuild.create(req.body);
    res.status(201).json(newUserRoleGuild);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteURG = async (req, res, next) => {
  try {
    const userRoleGuild = await UserRoleGuild.findByPk(req.params.id);
    if (!userRoleGuild) {
      res.sendStatus(404);
    } else {
      await userRoleGuild.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const replaceURG = async (req, res, next) => {
  try {
    const [updatedUserRoleGuild] = await UserRoleGuild.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedUserRoleGuild) {
      res.json(updatedUserRoleGuild);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  createURG,
  getAllURGs,
  getURGById,
  deleteURG,
  replaceURG,
};
