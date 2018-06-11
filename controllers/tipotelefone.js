'use strict';

const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.tipotelefone.findAll({ attributes:['id','descricao'] })
                           .then(tipotelefone => res.status(201).send(tipotelefone))
                           .catch(error => res.status(400).send(error));

      },


      adiciona(req, res) {

          /*return db.tipotelefone.create(req.body)
                           .then(tipotelefone => res.status(201).send(tipotelefone))
                           .catch(error => res.status(400).send(error));*/

           return db.tipotelefone.findOrCreate({where: { descricao: req.body.descricao }, defaults: req.body })
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

          const tipotel  = req.params.tipo;
          return db.tipotelefone.destroy({ where: { id: tipotel} })
                           .then(deletedTipotelefone => {
                                 if(deletedTipotelefone === 1){
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
