const express = require("express");
const emojis = require("./emojis");
const server = express();

server.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

server.use("/emojis", emojis);

module.exports = server;
