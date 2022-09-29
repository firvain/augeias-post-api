module.exports = function (req, res, next) {
  const { from } = req.query;
  if (!from || Object.keys(from).length === 0) {
    res.json({ error: "missing from parameter" });
  }

  next();
};
