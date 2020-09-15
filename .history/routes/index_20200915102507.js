var express = require('express')
var app = express()
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
	// render to views/index.ejs template file
	res.render('index', {title: 'Example Node.js application for Octank Demo', body: '<img src=' } )
})

/** 
 * We assign app object to module.exports
 * 
 * module.exports exposes the app object as a module
 * 
 * module.exports should be used to return the object 
 * when this file is required in another module like app.js
 */ 
module.exports = app;
