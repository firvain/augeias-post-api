const express = require("express");
const router = express.Router();
const accuweatherMapeRoute = require("./accuweather_mape");
const openweatherMapeRoute = require("./openweather_mape");

router.use("/accuweather", accuweatherMapeRoute);
router.use("/openweather", openweatherMapeRoute);
module.exports = router;
