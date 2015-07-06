var http = require('http')

var i = 2
var print = []

function get(){
	http.get(process.argv[i], function callback(response){
	var ret = ""
	response.on('data', function(data){
		ret += data
		print.push(ret)	
	})
	response.on('end', function(data){
		i += 1
		console.log(print)
		if (i < 5)
			get();
	})
})
}