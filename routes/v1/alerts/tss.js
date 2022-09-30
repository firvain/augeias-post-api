const express = require("express");
const router = express.Router();
const { db } = require("../../../modules/db");

router.route("/").get((req, res) => {
  db.any(
    'select "TSS", "TSS_alert" from "Aquatroll_alerts" where  "TSS_alert" = true  order by timestamp limit 1 '
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
  db.any('select "TSS", "TSS_alert" from "Aquatroll_alerts"')
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch((error) => {
      res.json({ error: error });
    });
});
module.exports = router;
