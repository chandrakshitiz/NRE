var express=require('express');
var app=express();
var sql=require('mysql');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});
var con=sql.createConnection({
	host:"localhost",
	user:"root",
	password:"kshitiz123",
	database:"NRE"
});
con.connect(function(err){
	if(err) throw err;
	console.log("Connected");
});
var mysql=require('mysql');
app.use('/',express.static('assets'));
app.set('view engine','ejs');
app.get('/homepage.html',function(req,res){
	res.sendFile(__dirname+'/homepage.html');
});
app.get('/aboutNreg.html',function(req,res){
	res.sendFile(__dirname+'/aboutNreg.html');
});
app.get('/Login.html',function(req,res){
	res.sendFile(__dirname+'/Login.html')
})
app.get('/signup.html',function(req,res){
	res.sendFile(__dirname+'/signup.html');
});
app.get('/Works.html',function(req,res){
	res.sendFile(__dirname+'/Works.html');
});
app.get('/wage.html',function(req,res){
	res.sendFile(__dirname+'/wage.html');
});
app.get('/query.html',function(req,res){
	res.sendFile(__dirname+'/query.html');
});
app.get('/employer.html',function(req,res){
	res.sendFile(__dirname+"/employer.html");
});	
app.post('/register',urlencodedParser,function(req,res){
	var a=req.body.name,b=req.body.email,c=req.body.dob,d=req.body.adhaar,e=req.body.mobile,f=req.body.password;
	var s="INSERT INTO Registration(name,email,dob,adhaar,mobile,password) VALUES (?,?,?,?,?,?)";
	con.query(s,[a,b,c,d,e,f],function(err,result){
		if(err) throw err;
		console.log("Inserted");
		s="INSERT INTO Work(adhaar,work) VALUES(?,'NOT ALLOTTED')";
	res.render('aftersignup',{data:req.body});	
	});
});
app.post('/loginto',urlencodedParser,function(req,res){
	var a=req.body.adhaar,b=req.body.password;
	var s="SELECT * FROM Registration WHERE adhaar=? AND password=?";
	con.query(s,[a,b],function(err,resultt){
		if(resultt.length!=0)
		{ var x="NOT ALLOTTED";
			con.query("SELECT * FROM Work WHERE adhaar=?",[a],function(err,result){
				if(err) throw err;
				if(result.length!=0)
				{x="ALLOTTED";res.render('afterlogin',{data1:resultt,data2:x});}
			else
				res.render('afterlogin',{data1:resultt,data2:'NOT ALLOTTED'});
			});
			
		}
		else
			res.render('wrong');
		console.log(resultt);
	});
});
app.post('/feedback',urlencodedParser,function(req,res){
	var a=req.body.name,b=req.body.email,c=req.body.message;
	var s="INSERT INTO Feedback(name,email,message) VALUES (?,?,?)";
	con.query(s,[a,b,c],function(err,result){
		if(err) throw err;
		console.log("Feedback Inserted");
		res.render('afterfeedback',{data:a});
	});
});
app.get('/allotwork',function(req,res){
	var s="SELECT * FROM Registration";
	con.query(s,function(err,result){
		if(err) throw err;
		console.log(result);
		res.render('allotwork',{data:result});
	})
});
app.post('/allotted',urlencodedParser,function(req,res){
	var a=req.body.adhaar;
	var s="INSERT INTO Work(adhaar, work) VALUES (?,'Allotted')";
	con.query(s,[a],function(err,result){
		if(err) throw err;
		res.render('success',{data:a});
	})
});
app.post('/employerReg',urlencodedParser,function(req,res){
	var a=req.body.name,b=req.body.email,c=req.body.dob,d=req.body.adhaar,e=req.body.mobile,f=req.body.password;
	var s="INSERT INTO Employer(name,email,dob,adhaar,mobile,password) VALUES (?,?,?,?,?,?)";
	con.query(s,[a,b,c,d,e,f],function(err,result){
		if(err) throw err;
		console.log("Inserted");
	res.render('employeraftersignup',{data:req.body});	
	});
});
app.post('/employerloginto',urlencodedParser,function(req,res){
	var a=req.body.adhaar,b=req.body.password;
	var s="SELECT * FROM Employer WHERE adhaar=? AND password=?";
	con.query(s,[a,b],function(err,resultt){
		if(resultt.length!=0)
		{ 
			
			res.render('allotwork');
			
		}
		else
			res.render('wrong');
		console.log(resultt);
	});
});
app.get('/forallotwork',function(req,res){
	var s="SELECT * FROM Registration";
			con.query(s,function(err,result){
				if(err) throw err;
					console.log(result);
					res.render("forallotwork",{data:result});
				});
})
app.get('/forfeedback',function(req,res){
	var s="SELECT * FROM Feedback";
			con.query(s,function(err,result){
				if(err) throw err;
					console.log(result);
					res.render("forfeedback",{data:result});
				});
})
app.get('/response',function(req,res){
	res.render('response');
});
app.listen(3000);	