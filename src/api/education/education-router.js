const express = require("express");
const education = require("./education-model");
const router = express.Router();

router.get("/", (req, res) => {
  education
    .find()
    .then((education) => {
      res.status(200).json(education);
    })
    .catch(() => {
      res.status(500).json({ message: "Failed to get an education" });
    });
});

module.exports = router;
