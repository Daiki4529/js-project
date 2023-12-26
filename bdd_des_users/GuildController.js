const { Guild } = require('../models');

module.exports = {

  getAllGuilds: async (req, res) => {
    try {
      const guilds = await Guild.findAll();
      res.json(guilds);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },
};
