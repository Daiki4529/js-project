const { Router } = require("express");
const { User } = require("../models/associations");
const checkAuth = require("../middlewares/checkAuth");
const router = new Router();

router.get("/users", checkAuth, async (req, res, next) => {
  if (req.userId) {
    req.query.id = req.userId;
  }
  res.json(
    await User.findAll({
      where: req.query,
    })
  );
});

router.post("/users", async (req, res, next) => {
  try {
    res.status(201).json(await User.create(req.body));
  } catch (error) {
    res.status(422).json({});
  }
});

module.exports = router;
