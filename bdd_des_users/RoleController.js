const { Role } = require('../models');

module.exports = {

  getAllRoles: async (req, res) => {
    try {
      const roles = await Role.findAll();
      res.json(roles);
    } catch (error) {

      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },
};
