const express = require("express");
const router = express.Router();
const { db, pgp } = require("../../../modules/db");
const { checkDate, checkParams } = require("../../../middlewares");
const moment = require("moment-timezone");

router.route("/").get(checkDate, checkParams, (req, res) => {
  console.log(req.query);
  const { from } = req.query;

  const d = pgp.as.date(moment.utc(from, "YYYY-MM-DD").toDate());

  db.any(
    'select legal_proteus_infinite.timestamp as timestamp,A."pH" as ph,legal_proteus_infinite.ph_grade from legal_proteus_infinite inner join "Proteus_infinite" A on legal_proteus_infinite.timestamp = A.timestamp where A.timestamp >= $1 order by A.timestamp',
    [d]
  )
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
      res.json({ error: error });
    });
});
router.route("/all").get((req, res) => {
  db.any('select ph_grade from "legal_proteus_infinite"', [true])
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});

module.exports = router;
