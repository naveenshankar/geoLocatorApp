

// Requires
var express = require('express');

// Configuration
var appConfig = {
    staticPath:  __dirname // __dirname+'/static'
};

// Application
var app = express();

// Middlewares
app.use(express.static(appConfig.staticPath));
app.use(express.json());       
app.use(express.urlencoded()); 

// Server
var server = app.listen(8000);

