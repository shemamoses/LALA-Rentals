const express = require("express");
const router = express.Router();

// Upload image(s), returns URL(s)
router.post("/images", (req, res) => {
  res.send("Upload image(s), returns URL(s)");
});

// Delete an uploaded image
router.delete("/images/:id", (req, res) => {
  res.send(`Delete uploaded image with id: ${req.params.id}`);
});

module.exports = router;