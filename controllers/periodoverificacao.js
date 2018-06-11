'use strict';


const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.sequelize.query('SELECT * FROM tb_periodoverificacao', { type: sequelize.QueryTypes.SELECT })
                          .then(retorno => res.status(201).send(retorno))
      },

      adiciona(req, res) {


       const periodo = req.body.periodo;
       const fator = req.body.fator;

       return db.sequelize.query('INSERT INTO tb_periodoverificacao (des_periodoverificacao, num_fatormultiplicador) VALUES (:periodo, :fator)', { replacements: { periodo: periodo, fator: fator }, type: sequelize.QueryTypes.INSERT })
                         .then(retorno => res.status(201).send(retorno));


      },
      
      atualiza(req, res) {

         const codigo = req.params.codigo;
         const periodo = req.body.periodo;
         const fator = req.body.fator;

         return db.sequelize.query('UPDATE tb_periodoverificacao SET des_periodoverificacao = :periodo, num_fatormultiplicador = :fator WHERE cod_periodoverificacao = :codigo', { replacements: { periodo: periodo, fator: fator, codigo: codigo }, type: sequelize.QueryTypes.UPDATE })
                         .then(retorno => res.status(201).send(retorno));

      },

      deleta(req, res) {

         const codigo = req.params.codigo;

         return db.sequelize.query('DELETE FROM tb_periodoverificacao WHERE cod_periodoverificacao = :codigo', { replacements: { codigo: codigo }, type: sequelize.QueryTypes.DELETE })
                         .then(retorno => res.status(201).send(retorno));

      },

};

