const { Message } = require('../models');
const Filter = require('bad-words');
const filter = new Filter();


Message.get = async (req, res, next) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }

};

Message.post = async (req, res, next) => {
  const { content, authorId, guildId } = req.body;

  // bad words avec isProfane permet de verifier un mot offensant
  if (filter.isProfane(content)) {
    return res.status(400).json({ error: 'Attention, messages blessants. Ça va te bannir, mon frérot ! :)' });
  }


  try {
    const newMessage = await Message.create({ content, authorId, guildId });
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};


Message.getById = async (req, res, next) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (message) {
      res.json(message);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

Message.patch = async (req, res, next) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      res.sendStatus(404);
    } else {
      await message.update(req.body);
      res.json(message);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }

};

Message.delete = async (req, res, next) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      res.sendStatus(404);
    } else {
      await message.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};



Message.put = async (req, res, next) => {
  try {
    const [updatedMessage] = await Message.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    if (updatedMessage) {
      res.json(updatedMessage);

    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};


module.exports = Message;
