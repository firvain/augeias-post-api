const express = require("express");
const router = express.Router();
const { db, pgp } = require("../../modules/db");
const { checkDate, checkParams } = require("../../middlewares");
const moment = require("moment-timezone");

router.route("/").get(checkDate, checkParams, (req, res) => {
  const { from } = req.query;

  // const d = pgp.as.date(moment(from, "YYYY-MM-DD").utc().toDate());
  try {
    const d = pgp.as.date(moment.utc(from, "YYYY-MM-DD").toDate());

    db.any(
      'select * from "addvantage" where timestamp >= $1 order by timestamp',
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
  db.any('select * from "addvantage"', [true])
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

module.exports = router;
