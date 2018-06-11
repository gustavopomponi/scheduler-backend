'use strict'

const periodoverificacao = require('./periodoverificacao')
const mensagem = require('./mensagem')
const parametro = require('./parametro')

const db = require('../config/db');

module.exports = {
   periodoverificacao,
   mensagem,
   parametro
};


