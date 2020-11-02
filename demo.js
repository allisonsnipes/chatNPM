//practicing writting to files
var fs = require('fs')


var data = {
    name: 'Allison'
}

//this allows us to write to files needs two parameters
fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    console.log('finished', err)
})

//allows us to read from the file
fs.readFile('./data.json', 'utf-8', (err, data) => {
    console.log('data read', err)
})