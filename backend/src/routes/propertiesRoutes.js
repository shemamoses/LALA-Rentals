const express = require("express");
const router = express.Router();

// List all available properties (supports pagination/filters)
router.get("/", (req, res) => {
  res.send("List all available properties with pagination and filters");
});

// Create a new property (HOST only)
router.post("/", (req, res) => {
  res.send("Create a new property (HOST only)");
});

// List properties belonging to the logged-in host
// This must come BEFORE the /:id route to be matched correctly
router.get("/my", (req, res) => {
  res.send("List properties belonging to the logged-in host");
});

// Get details of a single property
router.get("/:id", (req, res) => {
  res.send(`Get details of property with id: ${req.params.id}`);
});

// Update a property (OWNER only)
router.patch("/:id", (req, res) => {
  res.send(`Update property with id: ${req.params.id} (OWNER only)`);
});

// Delete a property (OWNER only)
router.delete("/:id", (req, res) => {
  res.send(`Delete property with id: ${req.params.id} (OWNER only)`);
});

module.exports = router;
