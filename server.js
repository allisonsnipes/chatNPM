//practicing serving static files on express.js
var express = require('express')
var bodyParser = require('body-parser')

// save express method as a variable
var app = express()

//need to serve static content
app.use(express.static(__dirname))
app.use(bodyParser.json())

//this serves to aid in the backend to talk to the front end pulls prepopulated messages and names from the database this will use the id identifier
app.get('/messages', (request, response) => {
    response.send(messages)
})

//this will be in charge of getting the input from the user and saving it to the database the 200 lets the server know that everything was ok this requires Postman
app.post('/messages', (request, response) => {
    console.log(request.body)
    response.sendStatus(200)
})

//placeholder message list also known as the database                                                                                                                                                                                                                          
var messages = [
    { name: 'Bob', message: 'hi' },
    { name: 'Jane', message: 'shalom' },
    { name: 'Jane', message: 'sup' },
]

//sets up express server
var server = app.listen(3000, () => {
    console.log('server  is listening on port', server.address().port)
})