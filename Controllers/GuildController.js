const { Guild } = require('../models');
Guild.get = async (req, res, next) => {
  try {
    const guilds = await Guild.findAll();
    res.json(guilds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
Guild.post = async (req, res, next) => {
  try {
    const guild = req.body;
    const newGuild = await Guild.create(guild);
    res.status(201).json(newGuild);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
Guild.getById = async (req, res, next) => {
  try {
    const guild = await Guild.findByPk(req.params.id);
    if (guild) {
      res.json(guild);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
Guild.patch = async (req, res, next) => {
  try {
    const guild = await Guild.findByPk(req.params.id);
    if (!guild) {
      res.sendStatus(404);
    } else {
      await guild.update(req.body);
      res.json(guild);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }

};

Guild.delete = async (req, res, next) => {
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
    res.status(500).json({ error: 'Server Error' });
  }
};


Guild.put = async (req, res, next) => {
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
    res.status(500).json({ error: 'Server Error' });
  }
};


module.exports = Guild;
