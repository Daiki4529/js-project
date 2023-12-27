const { UserRoleGuild } = require('../models');
UserRoleGuild.get = async (req, res, next) => {
  try {
    const userRoleGuilds = await UserRoleGuild.findAll();
    res.json(userRoleGuilds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
UserRoleGuild.getById = async (req, res, next) => {
  try {
    const userRoleGuild = await UserRoleGuild.findByPk(req.params.id);
    if (userRoleGuild) {
      res.json(userRoleGuild);
    } else {
      res.sendStatus(404);

    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'server error' });
  }
};



UserRoleGuild.post = async (req, res, next) => {
  try {
    const newUserRoleGuild = await UserRoleGuild.create(req.body);
    res.status(201).json(newUserRoleGuild);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }

};


UserRoleGuild.patch = async (req, res, next) => {
  try {
    const userRoleGuild = await UserRoleGuild.findByPk(req.params.id);
    if (!userRoleGuild) {
      res.sendStatus(404);
    } else {
      await userRoleGuild.update(req.body);
      res.json(userRoleGuild);
    }
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

UserRoleGuild.delete = async (req, res, next) => {
  try {
    const userRoleGuild = await UserRoleGuild.findByPk(req.params.id);
    if (!userRoleGuild) {
      res.sendStatus(404);
    } else {
      await userRoleGuild.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }


};



UserRoleGuild.put = async (req, res, next) => {

  try {
    const [updatedUserRoleGuild] = await UserRoleGuild.update(req.body, {
      where: { id: req.params.id },
      returning: true,

    });
    if (updatedUserRoleGuild) {
      res.json(updatedUserRoleGuild);
    } else {
      res.sendStatus(404);

    }
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = UserRoleGuild;
