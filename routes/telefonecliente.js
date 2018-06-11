'use strict';

const telefoneclienteController = require('../controllers').telefonecliente;

module.exports = (app, db) => {

  app.get('/telefonecliente/:cliente', (req,res) => {

    telefoneclienteController.lista(req, res);

  });

  // POST single owner
  app.post('/telefonecliente/:cliente', (req, res) => {

    telefoneclienteController.adiciona(req, res);

  });

  // POST single owner
  app.put('/telefonecliente/:cliente/telefone/:telefone', (req, res) => {

    telefoneclienteController.atualiza(req, res);

  });

  /*app.delete('/telefonecliente/:cliente/telefone/:telefone', (req, res) => {

    telefoneclienteController.deleta(req, res);

  });*/

  app.delete('/telefonecliente/:id_telefone', (req, res) => {

    telefoneclienteController.deleta(req, res);

  });


};
