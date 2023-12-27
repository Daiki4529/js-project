const express = require("express");
require("./models/db");
const UsersRouter = require("./routes/usersDb");

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.post("/", (req, res, next) => {
  res.send("Hello world from POST : " + JSON.stringify(req.body));
});

app.put("/", (req, res, next) => {
  res.send("Hello world from PUT : " + JSON.stringify(req.body));
});

app.use(UsersRouter);

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}.`);
});
