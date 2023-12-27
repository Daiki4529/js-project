const { Router } = require("express");
const checkAuth = require("../middlewares/checkAuth");
const RoleController = require("../controllers/RoleController");
const router = new Router();

// Routes pour l'entité Role
router.get("/Role", checkAuth, RoleController.getAllRoles);
router.get("/Role/:id", checkAuth, RoleController.getRoleById);
router.post("/Role", RoleController.createRole);
router.put("/Role/:id", RoleController.replaceRole);
router.delete("/Role/:id", RoleController.deleteRole);

module.exports = router;
