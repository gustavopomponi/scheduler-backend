'use strict'

const periodoverificacao = require('./periodoverificacao')
const mensagem = require('./mensagem')
const parametro = require('./parametro')
//const tipotelefone = require('./tipotelefone')
//const telefonecliente = require('./telefonecliente')
//const grupoproduto = require('./grupoproduto')
//const unidademedida = require('./unidademedida')
//const produto = require('./produto')
//const fornecedor = require('./fornecedor')
//const clienteendereco = require('./clienteendereco')
const db = require('../config/db');

module.exports = {
   periodoverificacao,
   mensagem,
   parametro
//   tipoparentesco,
//   tipotelefone,
//   telefonecliente,
//   grupoproduto,
//   unidademedida,
//   produto,
//   fornecedor,
//   clienteendereco
};




//module.exports = {
//  cliente,
//};



/*const routes = [
    require('./cliente')
//  require('./pets')
];

// Add access to the app and db objects to each route
module.exports = function router(app, controller) {
  return routes.forEach((route) => {
    route(app, controller);
  });
};*/
