const { Message } = require('../models');
const Filter = require('bad-words');
const filter = new Filter();

module.exports = {
  getAllMessages: async (req, res) => {
    try {
      const messages = await Message.findAll();
      res.json(messages);
    } catch (error) {

      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },

  createMessage: async (req, res) => {
    const { content, authorId, guildId } = req.body;

    //  l extension bad-words combiné a isProfane permet de verifier un mot offensant
    if (filter.isProfane(content)) {

      return res.status(400).json({ error: 'Attention, messages blessants ca va te ban mon frérot ! :)' });
    }

    try {
      const newMessage = await Message.create({ content, authorId, guildId });
      res.status(201).json(newMessage);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  },
};
