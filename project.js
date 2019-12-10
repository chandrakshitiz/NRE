var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kshitiz123",
  database: "project"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DELETE FROM Registration WHERE name='Shaurya'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});