const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded());
const { ROOT } = require("./utils/config").ROUTES;
app.use(cors());

app.use(ROOT, require("./routes/company-ads"));

const server = app.listen(process.env.PORT || 1234, (err) => {
  if (err) {
    console.log("app crash", err);
  } else {
    console.log("server started...", server.address().port);
  }
});
