const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to lala rental system api");
});

module.exports = router;
