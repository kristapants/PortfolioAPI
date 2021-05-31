const express = require("express");
const externalLinks = require("./externalLinks-model");
const router = express.Router();

router.get("/", (req, res) => {
  externalLinks
    .find()
    .then((externalLinks) => {
      res.status(200).json(externalLinks);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to get external links" });
    });
});

module.exports = router;
