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
      moment = require('moment'),
      activedirectory = require('activedirectory'),
      jwt = require('jsonwebtoken');

app.use(logger('dev'));
app.use(cors());

app.set('superSecret', 'schedulermadebygustavo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app, controllers);

	http.createServer(app).listen(config.port, function(){
    		console.log('Express server listening on port ' + config.port);
	});

module.exports = app;
