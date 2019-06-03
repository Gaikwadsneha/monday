var http=require('http');
var events=require('events');
var fs=require('fs');
var ee=new events.EventEmitter();
var logRequest=function()
{
var str="\nRequest received at "+new Date();
fs.appendFile('logging.txt',str,function(err)
{
	console.log("log created");
});
}
ee.addListener('logging',logRequest);
http.createServer(function(req,res){
ee.emit('logging');
res.write("request is logged");
res.end();
}).listen(9000);
console.log("server started at 9000");

