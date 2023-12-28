const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/auth", userController.registrationUser);
router.post("/login", userController.loginUser);

module.exports = router;
