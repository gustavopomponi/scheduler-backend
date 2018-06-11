'use strict';

const db = require('../config/db');

module.exports = {

  
      adiciona(req, res) {

          const cliente = req.params.cliente;
          const codcep = req.body.endereco_id;
          const numero = req.body.numero;
          const complemento = req.body.complemento;
          console.log(cliente);
          console.log(codcep);

          return db.clienteendereco.findOrCreate({where: { cliente_id: cliente , endereco_id: codcep, numero: numero, complemento: complemento},  defaults: req.body})
                           .then(retorno => res.status(201).send(retorno))
                           .catch(error => res.status(400).json({message:"Registro já inserido !!"}));

      },

      deleta(req, res) {

          const cliente = req.params.cliente;
          const endereco = req.params.endereco;
          return db.clienteendereco.destroy({ where: { cliente_id: cliente, endereco_id: endereco }, force: true })
                           .then(deletedAddressCustomer => {
                                 if(deletedAddressCustomer === 1){
                                      res.status(200).json({message:"Deleted successfully"});
                                      }
                                      else
                                      {
                                      res.status(404).json({message:"record not found"});
                                      }
                                    })
                           .catch(error => res.status(500).send(error));
      },

      lista(req, res){

          console.log(req.params);

          const cliente = req.params.cliente;
          return db.cliente.findAll({ include: [{ model:db.endereco, as: 'Endereco', attributes:['id','cep','logradouro','bairro','cidade','estado'], through: { attributes:['numero','complemento'] } }], where: { id: cliente }, attributes:['id'] })
                                   .then(retorno => res.status(201).send(retorno))
                                   .catch(error => res.status(404).send(error));

      }



};