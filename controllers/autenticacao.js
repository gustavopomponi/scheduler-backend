'use strict';

var config = require('../config/ad');
var activedirectory = require('activedirectory');
var jwt = require('jsonwebtoken');

var ad = new activedirectory(config);
var groupname = 'pomponi.security';
var express = require('express');
var apiRoutes = express.Router(); 

module.exports = {

     trigger(req, res) {

        ad.authenticate(req.body.username, req.body.password, function(err, auth) {

            if (err) {

              console.log('ERROR: '+JSON.stringify(err));
              res.status(403).json('Usuário ou senha Incorreto !!');

            }
            else if (auth) {

              console.log('Authenticated!');

              ad.isUserMemberOf(req.body.username, groupname , function(err, isMember) {

                  if (err) {

                      console.log('ERROR: ' +JSON.stringify(err));
                      res.status(403).json('ERROR: '+JSON.stringify(err));

                  } else if(isMember) {
                 
                      var payload = {};

                      var token = jwt.sign(payload, 'schedulermadebygustavo', {
                        expiresIn: '3h' // expires in 24 hours
                      });

                      // return the information including token as JSON
                      res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token,
                        membrode: isMember
                      });

                      console.log(req.body.username + ' isMemberOf ' + groupname + ': ' + isMember);

                   } else {

                      res.status(403).json('Nãp pertence ao grupo de segurança !!');

                   }

              });

            } else {

              console.log('Authentication failed!');

            }

        });

      },


};
