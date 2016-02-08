var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');


function expressInit(app, config) {

	app.use('/assets', express.static(config.rootPath + '/public/assets'));
	app.use('/app', express.static(config.rootPath + '/public/app'));

	app.use(morgan('dev'));
	app.use(bodyParser());

	app.use(express.static(config.rootPath + '/public'));

}

module.exports = exports = expressInit;
