const sql = require("mssql");

// cau hinh cac thong tin ket noi DB
const config = {
  user: "sa",
  password: "123456",
  server: "localhost\\SQLEXPRESS",
  database: "HR",
  options: {
    trustServerCertificate: true, //tin cậy chứng chỉ máy chủ
  },
};
const connectionSQLServer = sql.connect(config).then((pool) => {
  if (pool) {
    console.log("Connected to the SQL server.");
    return pool;
  }
  console.log("Failure to connect.");
});

module.exports = {
  connectionSQLServer,
  sql,
};
