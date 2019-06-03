var http=require('http');

var myserver=http.createserver(function (req,res){
	res.write("hello world from docker");
res.end();

}).listening(9000);


console.log("server listening at 9000");
