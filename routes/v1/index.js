const hereRoute = require("./here");
const terosRoute = require("./sensors/teros_12");
const aquatrollRoute = require("./sensors/aquatroll");
const atmosRoute = require("./sensors/atmos");
const proteusRoute = require("./sensors/proteus");
const scanCloriRoute = require("./sensors/scan_chlori");
const triscanRoute = require("./sensors/triscan");
const addvantageRoute = require("./sensors/addvantage");
const metricsRoute = require("./metrics");
const boundariesRoute = require("./boundaries");
const alertsRoute = require("./alerts");
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
router.use("/alerts", alertsRoute);

module.exports = router;
