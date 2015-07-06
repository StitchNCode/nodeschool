var fs = require('fs')

function callback(err, list)
{
	list.forEach(function(arg){
		if (arg.substr(arg.length - process.argv[3].length - 1) === ("." + process.argv[3]))
			console.log(arg);
	})
}

fs.readdir(String(process.argv[2]), callback)