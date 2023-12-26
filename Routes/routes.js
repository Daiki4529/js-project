// routes.js
const express = require('express');
const router = express.Router();
const AuthMiddleware = require('./middlewares/AuthMiddleware');
const UserController = require('./controllers/UserController');
const GuildController = require('./controllers/GuildController');
const RoleController = require('./controllers/RoleController');
const MessageController = require('./controllers/MessageController');
const UserRoleGuildController = require('./controllers/UserRoleGuildController');

// Authentification JWT Middleware
router.use(AuthMiddleware);

// Routes pour l'entité User
router.get('/users', UserController.getAllUsers);
router.get('/users/:username', UserController.getUserByUsername);
router.post('/users', UserController.createUser);
router.put('/users/:username', UserController.updateUser);
router.delete('/users/:username', UserController.deleteUser);

// Routes pour l'entité Guild
router.get('/guilds', GuildController.getAllGuilds);
router.get('/guilds/:id', GuildController.getGuildById);
router.post('/guilds', GuildController.createGuild);
router.put('/guilds/:id', GuildController.updateGuild);
router.delete('/guilds/:id', GuildController.deleteGuild);

// Routes pour l'entité Role
router.get('/roles', RoleController.getAllRoles);
router.get('/roles/:id', RoleController.getRoleById);
router.post('/roles', RoleController.createRole);
router.put('/roles/:id', RoleController.updateRole);
router.delete('/roles/:id', RoleController.deleteRole);

// Routes pour l'entité Message
router.get('/messages', MessageController.getAllMessages);
router.get('/messages/:id', MessageController.getMessageById);
router.post('/messages', MessageController.createMessage);
router.put('/messages/:id', MessageController.updateMessage);
router.delete('/messages/:id', MessageController.deleteMessage);

// Routes pour l'entité UserRoleGuild
router.get('/userroleguilds', UserRoleGuildController.getAllUserRoleGuilds);
router.get('/userroleguilds/:id', UserRoleGuildController.getUserRoleGuildById);
router.post('/userroleguilds', UserRoleGuildController.createUserRoleGuild);
router.put('/userroleguilds/:id', UserRoleGuildController.updateUserRoleGuild);
router.delete('/userroleguilds/:id', UserRoleGuildController.deleteUserRoleGuild);

module.exports = router;
