const router = require("express").Router();
const macrosController = require("../../controllers/macrosController");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

router
  .route("/register")
  .post(macrosController.create)

router
  .route("/login")
  .post(macrosController.findOne)


module.exports = router;