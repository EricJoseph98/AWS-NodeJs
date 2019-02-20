var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended : false}));

var nodemailer = require('nodemailer');

/*
var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 25,
  auth: {
    user: 'ericjkurusinkal@gmail.com',
    pass: 'maverick98'
  }
});

var transporter = nodemailer.createTransport({
  host: 'debugmail.io',
  port: 25,
  auth: {
    user: 'ericjkurusinkal@gmail.com',
    pass: 'b86c5930-3513-11e9-adcd-0191bffc6af7'
  }
});
*/

app.get('/',function (req,res){
	res.sendFile(__dirname + '/intro.html');
});

app.post('/submitData', function (req,res){
	var name = req.body.nameText;
	var phone = req.body.phoneNumber;
	
	var msg = "Data Received \nName : " + name + "\nPhone : " + phone;
	
	/*
	var mailOptions = {
		from: 'ericjkurusinkal@gmail.com',
		to: 'ericjkurusinkal@gmail.com',
		subject: 'Sending basic email using Node.js and Express - Eric Joseph CB.EN.U4CSE16322',
		text: msg,
	};
	
	transporter.sendMail(mailOptions, function(error, info){
	if (error) {
    console.log(error);
	}
	else {
    console.log('Email sent: ' + info.response);
	}
	});
	*/
	res.send(msg);
});

var server = app.listen(2099, function(){
	console.log('Server running on port 2099');
});