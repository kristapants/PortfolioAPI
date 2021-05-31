const express = require("express");
const emojis = require("./emojis");
const users = require("./users/users-router");
const projects = require("./projects/projects-router");
const education = require("./education/education-router");
const externalLinks = require("./externalLinks/externalLinks-router");

const server = express();

server.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
    activeRoutes: "users, education, projects, externalLinks, visitorLog",
  });
});

server.use("/emojis", emojis);
server.use("/users", users);
server.use("/projects", projects);
server.use("/education", education);
server.use("/externalLinks", externalLinks);

module.exports = server;
