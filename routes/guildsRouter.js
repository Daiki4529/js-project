const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const GuildController = require("../controllers/GuildController");
const router = new Router();

// Routes pour l'entité Guild
router.get("/Guild", checkAuth, GuildController.getAllGuilds);
router.get("/Guild/:id", checkAuth, GuildController.getGuildById);
router.post("/Guild", GuildController.createGuild);
router.put("/Guild/:id", GuildController.replaceGuild);
router.delete("/Guild/:id", GuildController.deleteGuild);

module.exports = router;
