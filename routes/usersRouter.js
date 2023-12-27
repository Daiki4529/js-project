const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const UserController = require("../controllers/UserController");
const router = new Router();

// Routes pour l'entité User
router.get("/User", checkAuth, UserController.getAllUsers);
router.get("/User/:username", checkAuth, UserController.getUserByUsername);
router.post("/User", UserController.createUser);
router.delete("/User/:username", UserController.deleteUser);
router.put("/User/:username", UserController.replaceUser);

module.exports = router;
