let mysql = require("mysql");

let connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "payroll",
  insecureAuth: true,
});

connectionMySQL.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
module.exports = connectionMySQL;
