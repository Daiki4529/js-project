const { User } = require("../models/associations");
const Filter = require("bad-words");
const filter = new Filter();

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

const getUserByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const createUser = async (req, res) => {
  const { username, nickname, email, password, phone, nitro } = req.body;

  try {
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required." });
    }

    const newUser = await User.create({
      username,
      nickname: nickname || null,
      email,
      password,
      phone: phone || null,
      nitro: nitro || null,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const deleteUser = async (req, res) => {
  const { username } = req.params;


  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await user.destroy();

    return res.status(204).end();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const replaceUser = async (req, res) => {
  const { username } = req.params;
  const { nickname, email, password, phone, nitro } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    
    await user.destroy();

    const newUser = await User.create({
      username: username,
      nickname: nickname || user.nickname || null,
      email: email || user.email,
      password: password || user.password,
      phone: phone || user.phone || null,
      nitro: nitro || user.nitro || null,
    });

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllUsers,
  getUserByUsername,
  createUser,
  deleteUser,
  replaceUser,
};
