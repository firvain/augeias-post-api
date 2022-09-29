const hereRoute = require("./here");
const terosRoute = require("./teros_12");
const aquatrollRoute = require("./aquatroll");
const atmosRoute = require("./atmos");
const proteusRoute = require("./proteus");
const scanCloriRoute = require("./scan_chlori");
const triscanRoute = require("./triscan");
const addvantageRoute = require("./addvantage");
const metricsRoute = require("./metrics");
const boundariesRoute = require("./boundaries");
const express = require("express");

const router = express.Router();

router.use("/here", hereRoute);
router.use("/teros", terosRoute);
router.use("/aquatroll", aquatrollRoute);
router.use("/atmos", atmosRoute);
router.use("/proteus", proteusRoute);
router.use("/scanchlori", scanCloriRoute);
router.use("/triscan", triscanRoute);
router.use("/addvantage", addvantageRoute);
router.use("/metrics", metricsRoute);
router.use("/boundaries", boundariesRoute);

module.exports = router;
