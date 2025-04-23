const express = require("express");
const router = express.Router();

// List all users (ADMIN only)
router.get("/users", (req, res) => {
  res.send("List all users (ADMIN only)");
});

// Block or unblock a user (ADMIN only)
router.patch("/users/:id/block", (req, res) => {
  res.send(`Block or unblock user with id: ${req.params.id} (ADMIN only)`);
});

// List all bookings in the system (ADMIN only)
router.get("/bookings", (req, res) => {
  res.send("List all bookings in the system (ADMIN only)");
});

// List all properties in the system (ADMIN only)
router.get("/properties", (req, res) => {
  res.send("List all properties in the system (ADMIN only)");
});

// Retrieve system stats & analytics (ADMIN only)
router.get("/dashboard", (req, res) => {
  res.send("Retrieve system stats & analytics (ADMIN only)");
});

module.exports = router;
