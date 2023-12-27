const { Guild } = require("../models/associations");

const getAllGuilds = async (req, res) => {
  try {
    const guilds = await Guild.findAll();
    res.json(guilds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getGuildById = async (req, res) => {
  try {
    const guild = await Guild.findByPk(req.params.id);
    if (guild) {
      res.json(guild);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const createGuild = async (req, res) => {
  try {
    const guild = req.body;
    const newGuild = await Guild.create(guild);
    res.status(201).json(newGuild);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const deleteGuild = async (req, res) => {
  try {
    const guild = await Guild.findByPk(req.params.id);
    if (!guild) {
      res.sendStatus(404);
    } else {
      await guild.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const replaceGuild = async (req, res) => {
  try {
    const [updatedGuild] = await Guild.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedGuild) {
      res.json(updatedGuild);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
module.exports = {
  getAllGuilds,
  getGuildById,
  createGuild,
  deleteGuild,
  replaceGuild,
};
