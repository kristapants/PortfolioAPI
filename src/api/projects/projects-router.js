const express = require("express");
const projects = require("./projects-model");
const router = express.Router();

router.get("/", (req, res) => {
  projects
    .find()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to get projects." });
    });
});

module.exports = router;
