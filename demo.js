//practicing reading from file
var fs = require('fs')
var data1 = require('./data.json')
console.log(data1.name)
    //the second parameter is the callback since is asynch
    //here is it an annymous fuction as an arrow function but really its function
    //(err, data)
fs.readFile('./data.json', 'utf-8', function(err, data) {
    var data = JSON.parse(data)
    console.log(data.name)
})