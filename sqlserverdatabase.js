var sql=require('mysql');
var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:"kshitiz123"
});
con.connect(function(err){
	if(err) throw err;
	console.log("Connection Established");
	con.query("CREATE DATABASE NRE",function(err,result){
		if(err) throw err;
		console.log("DATABASE Created");
	})
})