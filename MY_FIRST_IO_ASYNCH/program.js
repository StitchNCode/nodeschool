var fs = require('fs')

function callback(err, data){
	console.log(String(data).split('\n').length -1)
}

fs.readFile(process.argv[2], callback)