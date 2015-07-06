var fs = require('fs')

function searchdir(path, ext, cb){
	fs.readdir(String(path), function(err, list){
		if (err)
			return cb(err, null)
		var to_ret = []
		list.forEach(function(arg){
			if (arg.substr(arg.length - ext.length - 1) === ("." + ext))
				to_ret.push(arg)
		})
		cb(null, to_ret)
	})
}

module.exports = searchdir
