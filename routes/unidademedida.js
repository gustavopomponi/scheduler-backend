'use strict';

const unidademedidaController = require('../controllers').unidademedida;

module.exports = (app, db) => {

  app.get('/unidademedida', (req,res) => {

    unidademedidaController.lista(req, res);

  });

  // POST single owner
  app.post('/unidademedida', (req, res) => {

    unidademedidaController.adiciona(req, res);

  });

  // POST single owner
  app.put('/unidademedida/:unidade', (req, res) => {

    unidademedidaController.atualiza(req, res);

  });

  app.delete('/unidademedida/:unidade', (req, res) => {

    unidademedidaController.deleta(req, res);

  });


};
