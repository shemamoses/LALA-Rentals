//bookingRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("bookings home router");
});

router.post("/book", (req, res) => {
  res.send("made a booking");
});

router.delete("/cancel", (req, res) => {
  res.send("cancelled a booking");
});

module.exports = router;
