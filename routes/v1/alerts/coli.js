const express = require("express");
const router = express.Router();
const { db } = require("../../../modules/db");

router.route("/").get((req, res) => {
  db.any(
    'select "total_coli", "total_coli_alert" from "Proteus_infinite_alerts" where "total_coli_alert" = true  order by timestamp limit 1'
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
  db.any(
    'select "total_coli", "total_coli_alert" from "Proteus_infinite_alerts"'
  )
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});
module.exports = router;
