const { User } = require('../models');
const Filter = require('bad-words');
const filter = new Filter();
User.getAll = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

User.createOne = async (req, res, next) => {
  const { username, nickname, email, password, phone, nitro } = req.body;


  if (filter.isProfane(username)) {
    return res.status(400).json({ error: 'Attention, pseudo offensant, ça va te bannir mon frérot !' });
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
};

User.getById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {


      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

User.updateById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.sendStatus(404);
    } else {
      await user.update(req.body);
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });

  }
};

User.deleteById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.sendStatus(404);
    } else {

      await user.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server  Error' });
  }
};





module.exports = User;
