'use strict';

const produtoController = require('../controllers').produto;

module.exports = (app, db) => {

  app.get('/produto', (req,res) => {

    produtoController.lista(req, res);

  });

  app.get('/produto/grupo/:grupoproduto', (req,res) => {

    produtoController.listaGrupo(req, res);

  });

  // POST single owner
  app.post('/produto', (req, res) => {

    produtoController.adiciona(req, res);

  });

  // POST single owner
  app.put('/produto/:produto', (req, res) => {

    produtoController.atualiza(req, res);

  });

  app.delete('/produto/:produto', (req, res) => {

    produtoController.deleta(req, res);

  });


};
