var sql=require('mysql');
var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:"kshitiz123",
	database:"NRE"
});
con.connect(function(err){
	if(err) throw err;
	console.log("Connection Established");
	con.query("CREATE TABLE Registration(name VARCHAR(255),email VARCHAR(255),dob VARCHAR(255),adhaar VARCHAR(255),mobile VARCHAR(255),date DATE,PRIMARY KEY(adhaar))",function(err,result){
		if(err) throw err;
		console.log("Table Created");
	});
});