const initOptions = {
  // initialization options;
};

const pgp = require("pg-promise")(initOptions);

const cn = "postgres://augeias:augeias@83.212.19.17:5432/augeias";
const db = pgp(cn);

module.exports = {
  pgp,
  db,
};
