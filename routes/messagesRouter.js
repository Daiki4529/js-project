const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const MessageController = require("../controllers/MessageController");
const router = new Router();

// Routes pour l'entité Guild
router.get("/Message", checkAuth, MessageController.getAllMessages);
router.get("/Message/:id", checkAuth, MessageController.getMessageById);
router.post("/Message", MessageController.createMessage);
router.put("/Message/:id", MessageController.replaceMessage);
router.delete("/Message/:id", MessageController.deleteMessage);

module.exports = router;
