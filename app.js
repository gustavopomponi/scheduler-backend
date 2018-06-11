/**
 * Module dependencies.
 */

const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      http = require('http'),
      pg = require('pg'),
      db = require('./config/db'),
      env = require('./config/env'),
      config = require('./config')(),
      controllers = require('./controllers'),
      routes = require('./routes'),
      moment = require('moment');

app.use(logger('dev'));
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.get('*', (req, res) => res.status(200).send({
//  message: 'Welcome to the beginning of nothingness.',
//}));

routes(app, controllers);

	http.createServer(app).listen(config.port, function(){
    		console.log('Express server listening on port ' + config.port);
	});

module.exports = app;
