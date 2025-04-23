const express = require("express");
const router = express.Router();

// Simple GET route
router.get("/", (req, res) => {
  res.send("User Home Route");
});

router.post("/register", (req, res) => {
  res.send("User registered!");
});

router.delete("/remove", (req, res) => {
  res.send("user deleted");
});

module.exports = router;
