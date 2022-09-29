const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send("here be dragons");
});

module.exports = router;
