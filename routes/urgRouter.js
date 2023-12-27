const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const UserRoleGuildController = require("../controllers/UserRoleGuildController");
const router = new Router();

// Routes pour l'entité UserRoleGuild
router.get("/URG", checkAuth, UserRoleGuildController.getAllURGs);
router.get("/URG/:id", checkAuth, UserRoleGuildController.getURGById);
router.post("/URG", UserRoleGuildController.createURG);
router.put("/URG/:id", UserRoleGuildController.replaceURG);
router.delete("/URG/:id", UserRoleGuildController.deleteURG);

module.exports = router;
