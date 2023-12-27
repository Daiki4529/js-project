const { Role } = require('../models');

Role.get = async (req, res, next) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

Role.post = async (req, res, next) => {
  try {
    const role = req.body;
    const newRole = await Role.create(role);
    res.status(201).json(newRole);
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: 'Server Error' });
  }
};

Role.getById = async (req, res, next) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (role) {
      res.json(role);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};


Role.patch = async (req, res, next) => {
  try {
    const role = await Role.findByPk(req.params.id);
    if (!role) {
      res.sendStatus(404);
    } else {

      await role.update(req.body);
      res.json(role);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

Role.delete = async (req, res, next) => {
  try {

    const role = await Role.findByPk(req.params.id);
    if (!role) {

      res.sendStatus(404);
    } else {
      await role.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};



Role.put = async (req, res, next) => {
  try {
    const [updatedRole] = await Role.update(req.body, {
      where: { id: req.params.id },

      returning: true,
    });
    if (updatedRole) {
      res.json(updatedRole);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }


};


module.exports = Role;
