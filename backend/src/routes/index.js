//index.js
const express = require("express");
const router = express.Router();

// Import routers
const authRouter = require("./authRoutes");
const propertiesRouter = require("./propertiesRoutes");
const bookingsRouter = require("./bookingsRoutes");
const reviewsRouter = require("./reviewsRoutes");
const uploadsRouter = require("./uploadsRoutes");
const adminRouter = require("./adminRoutes");

// Register routes
app.use("/auth", authRouter);
app.use("/properties", propertiesRouter);
app.use("/bookings", bookingsRouter);
app.use("/reviews", reviewsRouter);
app.use("/uploads", uploadsRouter);
app.use("/admin", adminRouter);

module.exports = router;
