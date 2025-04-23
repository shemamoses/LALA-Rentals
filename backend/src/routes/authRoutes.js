const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth home route");
});

router.post("/register", (req, res) => {
  res.send("register a new user");
});

router.post("/login", (req, res) => {
  res.send("login authentication and issue jwt");
});

router.post("/logout", (req, res) => {
  res.send("logout user");
});

router.get("/me", (req, res) => {
  res.send("Get current logged-in user profile");
});

router.patch("/me", (req, res) => {
  res.send("Update current user’s profile info ");
});
router.patch("/me/password", (req, res) => {
  res.send("Change current user’s password");
});

module.exports = router;
