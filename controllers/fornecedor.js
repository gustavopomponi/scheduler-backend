'use strict';

const db = require('../config/db');

module.exports = {

     /*lista(req, res) {
          return db.fornecedor.findAll({ include: [{ model:db.tipoparentesco, as:'TipoParentesco' },
                                                { model:db.cliente, as:'Parent', include:[
                                                { model:db.tipoparentesco, as:'TipoParentesco' }] },
                                                { model:db.endereco, as :'Cliente' }] })
                           .then(cliente => res.status(201).send(cliente));

      },*/

      lista(req, res) {
           return db.fornecedor.findAll({ include: [{ model:db.endereco, as :'Endereco' }] })
                            .then(fornecedor => res.status(201).send(fornecedor));

       },


      adiciona(req, res) {

          const cnpj  = req.body.cnpj;
          return db.fornecedor.findOrCreate({where: { cnpj: cnpj }, defaults: req.body })
                           .then(retorno => res.status(201).send(retorno))
                           .catch(error => res.status(400).send(error));

      },

      atualiza(req, res) {

          return db.fornecedor.update(req.body, {where: { id: req.params.id, deleted_at: null }})
                           .then(retorno => {
                                if(retorno[0] === 1){
                                    res.status(200).json({message:"Updated successfully"});
                                } else {
                                   res.status(404).json({message:"record not found"});
                                }
                           })
                           .catch(error => res.status(500).send(error));

      },

      deleta(req, res) {

          return db.fornecedor.destroy({ where: { id: req.params.id }})
                           .then(deletedVendor => {
                                 if(deletedVendor === 1){
                                      res.status(200).json({message:"Deleted successfully"});
                                      }
                                      else
                                      {
                                      res.status(404).json({message:"record not found"});
                                      }
                                    })
                           .catch(error => res.status(500).send(error));
      },


};
