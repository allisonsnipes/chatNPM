//practicing serving static files on express.js
var express = require('express')

// save express method as a variable
var app = express()

//need to serve static content
app.use(express.static(__dirname))

//this serves to aid in the backend to talk to the front end
//this will use the id identifier
app.get('/messages', (request, response) => {
    response.send(messages)
})

//placeholder message list
var messages = [
    { name: 'Bob', message: 'hi' },
    { name: 'Jane', message: 'shalom' },
    { name: 'Jane', message: 'sup' },
]

//sets up express server
var server = app.listen(3000, () => {
    console.log('server  is listening on port', server.address().port)
})