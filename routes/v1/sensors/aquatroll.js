const express = require("express");
const router = express.Router();
const { db, pgp } = require("../../../modules/db");
const { checkDate, checkParams } = require("../../../middlewares");
const moment = require("moment-timezone");

router.route("/").get(checkDate, checkParams, (req, res) => {
  const { from } = req.query;
  try {
    const d = pgp.as.date(moment.utc(from, "YYYY-MM-DD").toDate());

    db.any(
      'select * from "Aquatroll" where timestamp >= $1 order by timestamp',
      [d]
    )
      .then((data) => {
        res.end(JSON.stringify(data));
      })
      .catch((error) => {
        res.json({ error: error });
      });
  } catch (error) {
    res.json({ error: error });
  }
});
router.route("/all").get((req, res) => {
  db.any('select * from "Aquatroll"', [true])
    .then((data) => {
      console.log("DATA:", data); // print data;
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

module.exports = router;
