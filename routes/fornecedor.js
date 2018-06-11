'use strict';

const fornecedorController = require('../controllers').fornecedor;

module.exports = (app, db) => {

  app.get('/fornecedor', (req,res) => {

    fornecedorController.lista(req, res);

  });

  // POST single owner
  app.post('/fornecedor', (req, res) => {

    fornecedorController.adiciona(req, res);

  });

  // POST single owner
  app.put('/fornecedor/:id', (req, res) => {

    fornecedorController.atualiza(req, res);

  });

  app.delete('/fornecedor/:id', (req, res) => {

    fornecedorController.deleta(req, res);

  });


};
