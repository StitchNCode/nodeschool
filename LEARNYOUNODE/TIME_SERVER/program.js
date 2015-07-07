var net		= require('net')
var server	= net.createServer(function(socket){
	var date = new Date()
	// socket.on('connection', function(){
	// 	console.log(date.getFullYear())
	// })
	socket.write(date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate()
		+ ' 0' + date.getHours() + ':' + date.getMinutes() + '\n')
	socket.close()
})
server.listen(process.argv[2])