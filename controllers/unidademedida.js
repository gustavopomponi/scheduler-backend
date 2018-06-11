'use strict';

const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.unidademedida.findAll()
                           .then(unidademedida => res.status(201).send(unidademedida))
                           .catch(error => res.status(400).send(error));

      },


      adiciona(req, res) {

           return db.unidademedida.findOrCreate({where: { descricao: req.body.descricao }, defaults: req.body })
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

        const unidademedida  = req.params.unidade;

        return db.unidademedida.update(req.body, {where: { id: unidademedida }})
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

          const unidademedida  = req.params.unidade;

          return db.unidademedida.destroy({ where: { id: unidademedida } })
                           .then(deletedUnidademedida => {
                                 if(deletedUnidademedida === 1){
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
