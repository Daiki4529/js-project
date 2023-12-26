// UserController.js
const { User } = require('../models');
module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  },
  getUserById: async (req, res) => {
    // on recup l'id du user
  },
  createUser: async (req, res) => {

  },
  updateUser: async (req, res) => {

  },
  deleteUser: async (req, res) => {

  },
};
