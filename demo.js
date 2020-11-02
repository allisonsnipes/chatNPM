//practicing writting to files
var fs = require('fs')
    //this allows us to write to files 
fs.readdir('./', (err, data) => {
    console.log(data)
})