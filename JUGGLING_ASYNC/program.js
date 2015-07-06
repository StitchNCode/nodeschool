var http = require('http');
var bl   = require('bl');

var print = []

// http.get(process.argv[2], function callback(response)
// 	{
// 	var ret = ""
// 	response.on('data', function(data){
// 		ret += data
// 	})
// 	response.on('end', function(data){
// 		print.push(ret)
// 		http.get(process.argv[3], function callback(response_two)
// 		{
// 			var ret_two = ""
// 			response_two.on('data', function(data)
// 			{
// 				ret_two += data
// 			})
// 			response_two.on('end', function(data)
// 			{
// 				print.push(ret_two)
// 				http.get(process.argv[3], function callback(response_three)
// 				{
// 					var ret_three = ""
// 					response_three.on('data', function(data)
// 					{
// 						ret_three += data
// 					})
// 					response_three.on('end', function(data)
// 					{
// 						print.push(ret_three)
// 						for (var i = 0; i < print.length; i++)console.log(print)
// 							console.log(print[i])
// 					})
// 				})
// 			})
// 		})
// 	})
// })

http.get(process.argv[2], function(data){
	print.push(data);
	http.get(process.argv[3], function(data){
		print.push(data);
		http.get(process.argv[4], function(data){
			print.push(data);
			for (var i = 0; i < print.length; i++){
				console.log(print[i])
			}
		});
	})
})