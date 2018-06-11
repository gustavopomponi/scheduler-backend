'use strict';

const clienteenderecoController = require('../controllers').clienteendereco;

module.exports = (app, db) => {

  app.get('/enderecocliente/:cliente', (req,res) => {

    clienteenderecoController.lista(req, res);

  });

  app.post('/enderecocliente/:cliente', (req, res) => {

    clienteenderecoController.adiciona(req, res);

  });


  app.delete('/enderecocliente/:cliente/endereco/:endereco', (req, res) => {

    clienteenderecoController.deleta(req, res);

  });


};
