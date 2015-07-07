var http	= require('http');
//const buff	= require('bl');

var print 	= []
//var line	= new buff

http.get(process.argv[2], function callback(response)
	{
	var ret = ""
	response.on('data', function(data){
		ret += data
	})
	response.on('end', function(data){
		print.push(ret)
		http.get(process.argv[3], function callback(response_two)
		{
			var ret_two = ""
			response_two.on('data', function(data)
			{
				ret_two += data
			})
			response_two.on('end', function(data)
			{
				print.push(ret_two)
				http.get(process.argv[4], function callback(response_three)
				{
					var ret_three = ""
					response_three.on('data', function(data)
					{
						ret_three += data
					})
					response_three.on('end', function(data)
					{
						console.log(ret)
						console.log(ret_two)
						console.log(ret_three)
					})
				})
			})
		})
	})
})

// http.get(process.argv[2], function(data){
// 	line.append(data)
// 	http.get(process.argv[3], function(data){
// 		line.append(data)
// 		http.get(process.argv[4], function(data){
// 			line.append(data)
// 			console.log(toString.line)
// 			})
// 		})
// })