const express = require("express");
const router = express.Router();
const { db, pgp } = require("../../modules/db");
const { checkDate, checkParams } = require("../../middlewares");
const moment = require("moment-timezone");

router.route("/").get(checkDate, checkParams, (req, res) => {
  console.log(req.query);
  const { from, grade } = req.query;
  if (grade && !["AVERAGE", "MINOR", "BIG"].includes(grade.toUpperCase())) {
    res.send({ error: "grade must be AVERAGE, MINOR or BIG" });
    return;
  }
  try {
    const d = pgp.as.date(moment.utc(from, "YYYY-MM-DD").toDate());

    if (grade && grade.length !== 0) {
      db.any(
        'select * from "legal_aquatroll" where timestamp >= $1 and conductivity_grade = $2 order by timestamp',
        [d, grade.toUpperCase()]
      )
        .then((data) => {
          console.log(data);
          res.json(data);
        })
        .catch((error) => {
          console.log(error);
          res.json({ error: error });
        });
    } else {
      db.any(
        'select * from "legal_aquatroll" where timestamp >= $1 order by timestamp',
        [d]
      )
        .then((data) => {
          res.end(JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
          res.json({ error: error });
        });
    }
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});
router.route("/all").get((req, res) => {
  db.any('select * from "legal_aquatroll"', [true])
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

module.exports = router;
