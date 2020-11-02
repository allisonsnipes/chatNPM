//practicing reading directories for a file s
var fs = require('fs')
    //this allows us to read all of the directories in our folder  
fs.readdir('./', (err, data) => {
    console.log(data)
})