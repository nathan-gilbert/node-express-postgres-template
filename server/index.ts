const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("../database");

const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (_, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/api/users", db.getUsers);
app.get("/api/users/:id", db.getUserById);
app.post("/api/users", db.createUser);
app.put("/api/users/:id", db.updateUser);
app.delete("/api/users/:id", db.deleteUser);

module.exports = app;
