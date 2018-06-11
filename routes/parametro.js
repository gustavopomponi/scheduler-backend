'use strict';

const parametroController = require('../controllers').parametro;

module.exports = (app, db) => {


  // Retorna todos os campos de todos os clientes
  app.get('/api/parametro', (req,res) => {

    parametroController.lista(req, res);

  });

  app.post('/api/parametro', (req,res) => {

    parametroController.adiciona(req, res);

  });

  app.patch('/api/parametro', (req,res) => {

  parametroController.atualizaGerais(req, res);

  });

  app.patch('/api/parametro/smtp', (req,res) => {

  parametroController.atualizaSmtp(req, res);

 });

  app.get('/api/online', (req,res) => {

   parametroController.testeapi(req,res);

 });


};
