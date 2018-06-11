'use strict';

const mensagemController = require('../controllers').mensagem;

module.exports = (app, db) => {


  // Retorna todos os campos de todos os clientes
  app.get('/api/mensagem', (req,res) => {

    mensagemController.lista(req, res);

  });

  app.post('/api/mensagem', (req,res) => {

    mensagemController.adiciona(req, res);

  });

  app.patch('/api/mensagem/:codigo', (req,res) => {

    mensagemController.atualiza(req, res);

  });

  app.delete('/api/mensagem/:codigo', (req,res) => {

    mensagemController.deleta(req, res);

  });

};
