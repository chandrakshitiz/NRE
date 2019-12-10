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
	con.query("ALTER TABLE Registration MODIFY COLUMN password VARCHAR(255)",function(err,result){
		if(err) throw err;
		console.log("done");
	});
});
