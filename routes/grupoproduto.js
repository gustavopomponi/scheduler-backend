'use strict';

const grupoprodutoController = require('../controllers').grupoproduto;

module.exports = (app, db) => {

  app.get('/grupoproduto', (req,res) => {

    grupoprodutoController.lista(req, res);

  });

  // POST single owner
  app.post('/grupoproduto', (req, res) => {

    grupoprodutoController.adiciona(req, res);

  });

  // POST single owner
  app.put('/grupoproduto/:grupo', (req, res) => {

    grupoprodutoController.atualiza(req, res);

  });

  app.delete('/grupoproduto/:grupo', (req, res) => {

    grupoprodutoController.deleta(req, res);

  });


};
