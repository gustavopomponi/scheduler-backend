'use strict';

const tipoparentescoController = require('../controllers').tipoparentesco;

module.exports = (app, db) => {

  app.get('/tipoparentesco', (req,res) => {

    tipoparentescoController.lista(req, res);

  });

  // POST single owner
  app.post('/tipoparentesco', (req, res) => {

    tipoparentescoController.adiciona(req, res);

  });
/*
  // PATCH single owner
  app.put('/tipoparentesco', (req, res) => {

    clienteController.atualiza(req, res);

  });
*/
  app.delete('/tipoparentesco', (req, res) => {

    tipoparentescoController.deleta(req, res);

  });


};
