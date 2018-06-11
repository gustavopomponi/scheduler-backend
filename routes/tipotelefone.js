'use strict';

const tipotelefoneController = require('../controllers').tipotelefone;

module.exports = (app, db) => {

  app.get('/tipotelefone', (req,res) => {

    tipotelefoneController.lista(req, res);

  });

  // POST single owner
  app.post('/tipotelefone', (req, res) => {

    tipotelefoneController.adiciona(req, res);

  });

  app.delete('/tipotelefone/:tipo', (req, res) => {

    tipotelefoneController.deleta(req, res);

  });


};
