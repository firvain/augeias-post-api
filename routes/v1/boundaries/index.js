const express = require("express");
const router = express.Router();
const conductivityRoute = require("./conductivity");
const phRoute = require("./ph");
const codRoute = require("./cod");
const bodRoute = require("./bod");
const totalColiRoute = require("./total_coli");
const tssRoute = require("./tss");

router.use("/conductivity", conductivityRoute);
router.use("/ph", phRoute);
router.use("/cod", codRoute);
router.use("/bod", bodRoute);
router.use("/coli", totalColiRoute);
router.use("/tss", tssRoute);

module.exports = router;
