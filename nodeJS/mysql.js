var mysql = require("mysql");
// 연습 위해 임시로 패스워드 123456으로 변경
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "opentutorials"
});

connection.connect();

connection.query("SELECT * FROM topic", function(error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
