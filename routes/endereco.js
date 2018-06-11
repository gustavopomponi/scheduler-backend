'use strict';

const enderecoController = require('../controllers').endereco;

module.exports = (app, db) => {

  app.get('/endereco/:cep', (req, res) => {

      enderecoController.localiza(req, res);

 });

/*
 app.post('/endereco/cep/:cep_id/customer/:customer_id' , (req, res) => {

      enderecoController.adicionaAoCliente(req,res);

 });
*/

 app.post('/endereco/cep/:cep_id/customer/:customer_id' , (req, res) => {

      enderecoController.adicionaAoCliente(req,res);

 });

 app.post('/endereco/cep/:cep_id/vendor/:fornecedor_id' , (req, res) => {

      enderecoController.adicionaAoFornecedor(req,res);

 });
/*
  // GET one owner by id
  app.get('/cliente/:id', (req, res) => {
    const id = req.params.id;
    db.cliente.find({
      where: { id: id}
    })
      .then(cliente => {
        res.json(cliente);
      });
  });

  // POST single owner
  app.post('/cliente', (req, res) => {
    const name = req.body.name;
    const role = req.body.role;
    db.cliente.create({
      name: name,
      role: role
    })
      .then(newOwner => {
        res.json(newOwner);
      })
  });

  // PATCH single owner
  app.patch('/owner/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.owners.find({
      where: { id: id }
    })
      .then(owner => {
        return owner.updateAttributes(updates)
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });

  // DELETE single owner
  app.delete('/owner/:id', (req, res) => {
    const id = req.params.id;
    db.owners.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });
  });
*/
};
