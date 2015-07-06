var fs = require('fs')

console.log(String(fs.readFileSync(process.argv[2])).split('\n').length -1)