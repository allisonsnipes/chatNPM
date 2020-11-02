//practicing serving static files on express.js
var express = require('express')

// save express method as a variable
var app = express()

//need to serve static content
app.use(express.static(__dirname))

//sets up express server
var server = app.listen(3000, () => {
    console.log('server  is listening on port', server.address().port)
})