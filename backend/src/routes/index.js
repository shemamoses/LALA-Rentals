//index.js
const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const propertyRoutes = require("./propertyRoutes");
const bookingRoutes = require("./bookingRoutes");
const authRoutes = require("./authRoutes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);
router.use("/bookings", bookingRoutes);

module.exports = router;
