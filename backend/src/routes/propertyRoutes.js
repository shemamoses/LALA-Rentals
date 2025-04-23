const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  res.send("Get all properties");
});


router.post("/create", (req, res) => {
  res.send(`New property created: ${title}`);
});

module.exports = router;
