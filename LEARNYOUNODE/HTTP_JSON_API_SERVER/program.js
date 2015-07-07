var http	= require('http')
var url		= require('url')
var fs		= require('fs')

function	onParseTime(req, res){
	var myiso = new Date(req.data.query.iso)
	res.writeHead(200, {'Content-Type': 'applications/json'})
	var response = {
      hour: myiso.getHours(),
      minute: myiso.getMinutes(),
      second: myiso.getSeconds()
    }
    res.write(JSON.stringify(response))
    res.end()
}

function	onUnixTime(req, res){
	var myunix = new Date(req.data.query.iso)
	res.writeHead(200, {'Content-Type': 'applications/json'})
	var response = {
      unixtime: Number(myunix)
    }
    res.write(JSON.stringify(response))
    res.end()
}

var server = http.createServer(function(req, res){
	req.data = url.parse(req.url, true)
	if (req.data.pathname == '/api/parsetime')
		onParseTime(req, res)
	if (req.data.pathname == '/api/unixtime')
		onUnixTime(req, res)
})
server.listen(process.argv[2])