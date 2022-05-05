const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const route = require("./app/routes");

app.use(bodyParser.json());

//app init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
