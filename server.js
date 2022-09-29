const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");
// const httpStatus = require("http-status");

const app = express();

const PORT = process.env.PORT || 3000;
const routes = require("./routes/v1");

app.use(bodyParser.json());
// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`);
});
