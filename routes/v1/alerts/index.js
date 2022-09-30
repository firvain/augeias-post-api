const express = require("express");
const router = express.Router();
const conductivityRoute = require("./conductivity");
const tssRoute = require("./tss");
const phRoute = require("./ph");
const codRoute = require("./cod");
const bodRoute = require("./bod");
const coliRoute = require("./coli");
//
router.use("/conductivity", conductivityRoute);
router.use("/tss", tssRoute);
router.use("/ph", phRoute);
router.use("/cod", codRoute);
router.use("/bod", bodRoute);
router.use("/coli", coliRoute);

module.exports = router;
