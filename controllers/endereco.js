'use strict';

const db = require('../config/db');
const buscaCep = require('busca-cep');
const request = require('request');


module.exports = {

     adiciona(req, res){

       const novocep = req.cep.slice(0,5) + req.cep.slice(6,req.cep.length);
       console.log("CEPAO: " + novocep);
       const addr = {
                      "cep": novocep,
                      "logradouro": req.logradouro,
                      "bairro": req.bairro,
                      "cidade": req.localidade,
                      "estado": req.uf
                    }

       return db.endereco.findOrCreate({where: { cep: novocep }, defaults: addr })
                             .then(retorno => {
                                   if(retorno){
                                       //res.status(200).json({message:"Inserted successfully"});
                                       res.json(retorno[0]);
                                   } else {
                                       res.status(404).json({message:"record not found"});
                                   }
                                 })
                             .catch(error => console.log(error));

     },


     localiza(req, res) {

          const zip = req.params.cep;

          const newzip = zip.slice(0,5) + '-' + zip.slice(5,zip.length);

          return db.endereco.findOne({ where: {cep: zip}})
                           .then(address => {
                                      if(!address){
                                          return buscaCep(newzip).then(address => {
                                                                          if(!address.erro){
                                                                              this.adiciona(address,res);
                                                                          }
                                                                          else {
                                                                            res.json({message:"Cep não existente !!"});
                                                                          }
                                                                        })
                                                              .catch(erro => { console.log(`Erro: statusCode ${erro.statusCode} e mensagem ${erro.message}`); });
                                      } else {
                                          res.json(address);
                                      }})
                           .catch(error => res.status(400).send(error));

      },

      adicionaAoCliente(req, res) {

          const customer = req.params.customer_id;
          const zip = req.params.cep_id;

          req.body.cliente_id = customer;
          req.body.endereco_id = zip;

          return db.clienteendereco.findOrCreate({where: { cliente_id: customer, endereco_id:zip, numero: req.body.numero }, defaults: req.body })
                                .then(retorno => {
                                      if(retorno){
                                          //res.status(200).json({message:"Inserted successfully"});
                                          res.status(200).json(retorno);
                                      } else {
                                          res.status(404).json({message:"record not found"});
                                      }
                                    })
                                .catch(error => console.log(error));


          //console.log(req.params.customer_id);
          //console.log(req.params.cep_id);
          //console.log(req.body);


          //return req.body;

      },

      adicionaAoFornecedor(req, res) {

          const vendor = req.params.fornecedor_id;
          const zip = req.params.cep_id;

          req.body.fornecedor_id = vendor;
          req.body.endereco_id = zip;

          return db.fornecedorendereco.findOrCreate({where: { fornecedor_id: vendor, endereco_id: zip, numero: req.body.numero }, defaults: req.body })
                                .then(retorno => {
                                      if(retorno){
                                          //res.status(200).json({message:"Inserted successfully"});
                                          res.status(200).json(retorno);
                                      } else {
                                          res.status(404).json({message:"record not found"});
                                      }
                                    })
                                .catch(error => console.log(error));

      }

};
