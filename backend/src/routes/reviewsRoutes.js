const express = require("express");
const router = express.Router();

// Fetch all reviews for a property
router.get("/:propertyId", (req, res) => {
  res.send(`Fetch all reviews for property with id: ${req.params.propertyId}`);
});

// Leave a review on a property (USER only)
router.post("/:propertyId", (req, res) => {
  res.send(
    `Leave a review on property with id: ${req.params.propertyId} (USER only)`
  );
});

// Delete a review (OWNER only)
router.delete("/:id", (req, res) => {
  res.send(`Delete review with id: ${req.params.id} (OWNER only)`);
});

module.exports = router;
