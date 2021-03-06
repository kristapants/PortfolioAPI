const express = require("express");
const users = require("./users-model");
const router = express.Router();

router.get("/", (req, res) => {
  users
    .find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

module.exports = router;
