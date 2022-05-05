const hrRoute = require("./hrEmployee");
const prRoute = require("./prEmployee");

function route(app) {
  app.use("/api/hr", hrRoute);
  app.use("/api/pr", prRoute);
}

module.exports = route;
