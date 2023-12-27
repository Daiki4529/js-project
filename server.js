const express = require("express");
require("./models/db");
const UsersRouter = require("./routes/usersRouter");
const GuildsRouter = require("./routes/guildsRouter");
const MessageRouter = require("./routes/messagesRouter");
const RoleRouter = require("./routes/rolesRouter");
const URGRouter = require("./routes/urgRouter");

const app = express();

app.use(express.json());

app.use(UsersRouter);
app.use(GuildsRouter);
app.use(MessageRouter);
app.use(RoleRouter);
app.use(URGRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}.`);
});
