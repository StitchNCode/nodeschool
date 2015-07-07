var http = require('http')

http.get(process.argv[2], function callback(response){
	var ret = ""
	response.on('data', function(data){
		ret += data
	})
	response.on('end', function(data){
		console.log(String(ret.length))
		console.log(String(ret))

	})
})