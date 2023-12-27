const { User } = require('../models');
const Filter = require('bad-words');
const filter = new Filter();

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },

  createUser: async (req, res) => {
    const { username, nickname, email, password, phone, nitro } = req.body;



    // l extension bad-words combiné a isProfane permet de verifier un mot offensant
    if (filter.isProfane(username)) {
      return res.status(400).json({ error: 'Attention, pseudo offensant, ca va te ban mon frérot !' });
    }

    try {
      const newUser = await User.create({
        username,
        nickname,
        email,
        password,
        phone,
        nitro,
      });
      res.status(201).json(newUser);


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },
};
