var express = require('express')
var app = express()

app.use(express.static(__dirname))
var server = app.listen(3001, () => {
    console.log("Hitting server on port :: "+ server.address().port)
})