'use strict';

const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = {

     lista(req, res) {
          
          return db.sequelize.query('SELECT * FROM tb_mensagem', { type: sequelize.QueryTypes.SELECT })
                          .then(retorno => res.status(201).send(retorno))
      
      },

      
      adiciona(req, res) {


       const assunto = req.body.assunto;
       const mensagem = req.body.mensagem;
       const titulo = req.body.titulo;

       return db.sequelize.query('INSERT INTO tb_mensagem (des_assunto, des_mensagem, des_titulo) VALUES (:assunto, :mensagem, :titulo)', { replacements: { assunto: assunto, mensagem: mensagem, titulo: titulo }, type: sequelize.QueryTypes.INSERT })
                         .then(retorno => res.status(201).send(retorno));


      },
      
      atualiza(req, res) {

         const codigo = req.params.codigo;
         const assunto = req.body.assunto;
         const mensagem = req.body.mensagem;
         const titulo = req.body.titulo;

         return db.sequelize.query('UPDATE tb_mensagem SET des_assunto = :assunto, des_mensagem = :mensagem, des_titulo = :titulo WHERE cod_mensagem = :codigo', { replacements: { assunto: assunto, mensagem: mensagem, titulo: titulo, codigo: codigo }, type: sequelize.QueryTypes.UPDATE })
                         .then(retorno => res.status(201).send(retorno));

      },

      deleta(req, res) {

         const codigo = req.params.codigo;

         return db.sequelize.query('DELETE FROM tb_mensagem WHERE cod_mensagem = :codigo', { replacements: { codigo: codigo }, type: sequelize.QueryTypes.DELETE })
                         .then(retorno => res.status(201).send(retorno));

      },
      

};
