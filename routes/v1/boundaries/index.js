const express = require("express");
const router = express.Router();
const conductivityRoute = require("./conductivity");
const phRoute = require("./ph");
const codRoute = require("./cod");
const bodRoute = require("./bod");

router.use("/conductivity", conductivityRoute);
router.use("/ph", phRoute);
router.use("/cod", codRoute);
router.use("/bod", bodRoute);

module.exports = router;
