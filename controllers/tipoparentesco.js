'use strict';

const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.tipoparentesco.findAll({ attributes:['id','descricao'] })
                           .then(tipoparentesco => res.status(201).send(tipoparentesco))
                           .catch(error => res.status(400).send(error));

      },


      adiciona(req, res) {

          /*return db.tipoparentesco.create(req.body)
                           .then(tipoparentesco => res.status(201).send(tipoparentesco))
                           .catch(error => res.status(400).send(error));*/

           return db.tipoparentesco.findOrCreate({where: { descricao: req.body.descricao }, defaults: req.body })
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

      deleta(req, res) {

          const cpf  = req.body.id;
          return db.tipoparentesco.destroy({ where: { id: id} })
                           .then(deletedCustomer => {
                                 if(deletedCustomer === 1){
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
