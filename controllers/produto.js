'use strict';

const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.produto.findAll({ include: [{ model:db.unidademedida, as:'UnidadeMedida' },
                                                { model:db.grupoproduto, as:'Grupo' }]})
                           .then(produto => res.status(201).send(produto))
                           .catch(error => res.status(400).send(error));

      },

      listaGrupo(req, res) {
           return db.produto.findAll({ where: { grupoproduto_id: req.params.grupoproduto }, include: [{ model:db.unidademedida, as:'UnidadeMedida' }] })
                            .then(produto => res.status(201).send(produto))
                            .catch(error => res.status(400).send(error));

       },

      adiciona(req, res) {

           return db.produto.findOrCreate({where: { descricao: req.body.descricao }, defaults: req.body })
                                 .then(produto => {
                                       if(produto){
                                           //res.status(200).json({message:"Inserted successfully"});
                                           res.status(200).json(produto);
                                       } else {
                                           res.status(404).json({message:"record not found"});
                                       }
                                     })
                                 .catch(error => console.log(error));


      },

      atualiza(req, res) {

        const produto  = req.params.produto;

        return db.produto.update(req.body, {where: { id: produto }})
                         .then(produto => {
                              if(produto[0] === 1){
                                  res.status(200).json({message:"Updated successfully"});
                              } else {
                                 res.status(404).json({message:"record not found"});
                              }
                         })
                         .catch(error => res.status(500).send(error));

      },

      deleta(req, res) {

          const produto  = req.params.produto;

          return db.produto.destroy({ where: { id: produto } })
                           .then(deletedProduto => {
                                 if(deletedProduto === 1){
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
