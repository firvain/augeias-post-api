const express = require("express");
const router = express.Router();
const conductivityRoute = require("./conductivity");

router.use("/conductivity", conductivityRoute);

module.exports = router;
