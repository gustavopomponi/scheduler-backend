'use strict';

const ActiveDirectory = require('activedirectory');

const config = { 
				url: 'ldap://cbsrv-old.pomponi.com.br',
               	baseDN: 'dc=pomponi,dc=com,dc=br',
               	username: 'scheduler@pomponi.com.br',
               	password: '@@pomponi2018' 
}

module.exports = config;