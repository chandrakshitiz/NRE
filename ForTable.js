var sql=require('mysql');
var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:"kshitiz123",
	database:"NRE"
});
con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
	var s="CREATE TABLE Employer(name VARCHAR(255), email VARCHAR(255),dob VARCHAR(255) ,adhaar VARCHAR(255), mobile VARCHAR(255),password VARCHAR(255) )";
	con.query(s,function(err,result){
		if(err) throw err;
		console.log("Table Created");
	});

});