'use strict';

const db = require('../config/db');
const request = require('request');


module.exports = {

    lista(req, res) {

         const cliente = req.params.cliente;

         return db.telefonecliente.findAll({ include: [{ model:db.tipotelefone, as: 'Tipo', paranoid: false, attributes: ['id', 'descricao'] }], where: { cliente_id: cliente }, attributes:['id','descricao']})
                          .then(tipoparentesco => res.status(201).send(tipoparentesco))
                          .catch(error => res.status(404).send(error));

     },

     adiciona(req, res){

      //req.body.cliente_id = req.params.cliente;
      const telefone = req.body.descricao;
      const cliente = req.params.cliente;

       return db.telefonecliente.findOrCreate({where: { cliente_id: cliente, descricao: telefone }, defaults: req.body })
                             .then(retorno => {
                                   if(retorno){
                                       //res.status(200).json({message:"Inserted successfully"});
                                       res.status(200).json(retorno);
                                   } else {
                                       res.status(404).json({message:"record not found"});
                                   }
                                 })
                             .catch(error => console.log(error));

     },

     atualiza(req, res) {

         const cliente = req.params.cliente;
         const telefone = req.params.telefone;

         return db.telefonecliente.update(req.body, {where: { id: telefone, cliente_id: cliente }})
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

       const telefone = req.params.id_telefone;

         return db.telefonecliente.destroy({ where: { id: telefone } })
                          .then(deletedTelephone => {
                                if(deletedTelephone === 1){
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
