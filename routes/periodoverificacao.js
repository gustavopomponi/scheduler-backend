'use strict';

const periodoVerificacaoController = require('../controllers').periodoverificacao;

module.exports = (app, db) => {


  // Retorna todos os periodos
  app.get('/api/periodoverificacao', (req,res) => {

    periodoVerificacaoController.lista(req, res);

  });

  app.post('/api/periodoverificacao', (req,res) => {

    periodoVerificacaoController.adiciona(req, res);

  });

  app.patch('/api/periodoverificacao/:codigo', (req,res) => {

    periodoVerificacaoController.atualiza(req, res);

  });

  app.delete('/api/periodoverificacao/:codigo', (req,res) => {

    periodoVerificacaoController.deleta(req, res);

  });


};
