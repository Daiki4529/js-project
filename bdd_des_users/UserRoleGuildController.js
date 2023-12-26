const { UserRoleGuild } = require('../models');


module.exports = {

  getAllUserRoleGuilds: async (req, res) => {
    try {
      const userRoleGuilds = await UserRoleGuild.findAll();
      res.json(userRoleGuilds);

    } catch (error) {

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
