mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function(err, list)
{
	if (!err)
		list.forEach(function(arg){
			console.log(arg)
		})
})