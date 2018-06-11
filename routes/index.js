'use strict'

const routes = [
    require('./periodoverificacao'),
    require('./mensagem'),
    require('./parametro')
//    require('./tipoparentesco'),
//    require('./tipotelefone'),
//    require('./telefonecliente'),
//    require('./grupoproduto'),
//    require('./unidademedida'),
//    require('./produto'),
//    require('./fornecedor'),
//    require('./clienteendereco')
//  require('./pets')
];

// Add access to the app and db objects to each route
module.exports = function router(app, controller) {
  return routes.forEach((route) => {
    route(app, controller);
  });
};
