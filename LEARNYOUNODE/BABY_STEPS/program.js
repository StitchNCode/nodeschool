a = process.argv.slice(2)

num = 0

a.forEach(function(arg){
	num += Number(arg)
})

console.log(String(num))
