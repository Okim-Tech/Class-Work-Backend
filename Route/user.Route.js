const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../Controller/user.controller.js");

// Routes
router.post("/register", register);
router.post("/login", login);
router.get("/allusers", getAllUsers);
router.get("/:id", getUserById);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
