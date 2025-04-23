const express = require("express");
const router = express.Router();

// Create a booking (USER only)
router.post("/", (req, res) => {
  res.send("Create a new booking (USER only)");
});

// List all bookings (ADMIN) or filter by USER
router.get("/", (req, res) => {
  res.send("List all bookings (ADMIN) or filter by USER");
});

// List bookings for the current user
// This must come BEFORE the /:id route to be matched correctly
router.get("/my", (req, res) => {
  res.send("List bookings for the current user");
});

// Get details of a single booking
router.get("/:id", (req, res) => {
  res.send(`Get details of booking with id: ${req.params.id}`);
});

// Cancel a booking (USER only)
router.delete("/:id", (req, res) => {
  res.send(`Cancel booking with id: ${req.params.id} (USER only)`);
});

module.exports = router;
