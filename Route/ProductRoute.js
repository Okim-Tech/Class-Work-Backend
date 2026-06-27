const express = require("express");
const {
  createProduct,
  getAllProduct,
} = require("../Controller/ProductController.js");
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getAllProduct);

module.exports = router;
