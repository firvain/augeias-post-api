const moment = require("moment");
module.exports = function (req, res, next) {
  const { from } = req.query;

  if (from && Object.keys(from).length !== 0) {
    if (!moment(from, "YYYY-MM-DD", true).isValid()) {
      res.json({ error: "Invalid date format" });
    }
  }
  // Implement the middleware function based on the options object
  next();
};
