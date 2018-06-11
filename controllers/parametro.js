'use strict';

const moment = require('moment');
const sequelize = require('sequelize');
const db = require('../config/db');

module.exports = {

     lista(req, res) {
          return db.sequelize.query('select' +
                                     ' par.num_frequenciaverificacao "frequenciaverificacao",' +
                                     ' par.boo_gerarlog "gerarlog",' +
                                     ' par.dt_horainicio "horainicio",' +
                                     ' par.dt_proximaexecucao "proximaexecucao",' +
                                     ' par.dt_ultimaexecucao "ultimaexecucao",' +
                                     ' per.des_periodoverificacao "periodoverificacao",' +
                                     ' per.cod_periodoverificacao "codperiodoverificacao",' +
                                     ' par.des_emailfrom "remetente",' +
                                     ' par.boo_smtpauth "authsmtp",' +
                                     ' par.des_smtphost "hostsmtp",' +
                                     ' par.des_smtppassword "senhasmtp",' +
                                     ' par.des_smtpport "portasmtp",' +
                                     ' par.boo_smtpstarttls "starttlsmtp",' +
                                     ' par.des_smtpusername "usuariosmtp"' +
                                  ' from'+
                                    ' tb_parametro par' +
                                    ' inner join tb_periodoverificacao per on (per.cod_periodoverificacao = par.cod_periodoverificacao)', { type: sequelize.QueryTypes.SELECT })
                                .then(retorno => res.status(201).send(retorno))


                            
      },

      adiciona(req, res) {

        var date = new Date(Date.now()).toISOString().split('.')[0];

        const emailfrom = req.body.emailfrom,
             frequenciaverificacao = req.body.frequenciaverificacao,
             gerarlog = req.body.gerarlog,
             horainicio = req.body.horainicio,
             proximaexecucao = date,
             smtpauth = req.body.smtpauth,
             smtphost = req.body.smtphost,
             smtppassword = req.body.smtppassword,
             smtpport = req.body.smtpport,
             smtpstarttls = req.body.smtpstarttls,
             smtpusername = req.body.smtpusername,
             codmensagem = req.body.codmensagem,
             codperiodo = req.body.codperiodo;


            return db.sequelize.query('SELECT COUNT(*) FROM tb_parametro')
                                     .then(retorno => { // 
                                                    
                                                    if(retorno[0][0].count == 0){

                                                        db.sequelize.query('INSERT INTO tb_parametro (des_emailfrom, num_frequenciaverificacao, boo_gerarlog, dt_horainicio, dt_proximaexecucao, boo_smtpauth, des_smtphost, des_smtppassword, des_smtpport, boo_smtpstarttls, des_smtpusername, cod_mensagem, cod_periodoverificacao) VALUES (:emailfrom, :frequenciaverificacao, :gerarlog, :horainicio, :proximaexecucao, :smtpauth, :smtphost, :smtppassword, :smtpport, :smtpstarttls, :smtpusername, :codmensagem, :codperiodo)', { replacements: { emailfrom: emailfrom, frequenciaverificacao: frequenciaverificacao, gerarlog: gerarlog, horainicio: horainicio, proximaexecucao: proximaexecucao, smtpauth: smtpauth, smtphost: smtphost, smtppassword: smtppassword, smtpport: smtpport, smtpstarttls: smtpstarttls, smtpusername: smtpusername, codmensagem: codmensagem, codperiodo: codperiodo }, type: sequelize.QueryTypes.INSERT })
                                                                           .then(retorno => res.status(201).send(retorno));

                                                        res.status(201).send('Registro inserido com sucesso !!');
                                                    }

                                                    else
                                                    {
                                                        res.status(200).send('Registro já Existe !!');
                                                    }
                                                  
                                                });


      },
      
      atualizaGerais(req,res){

        var v_horainicio = this.calcula_proximaexecucao(req.body.horainicio);

        const frequenciaverificacao = req.body.frequencia,
              gerarlog = req.body.gerarlog,
              horainicio = req.body.horainicio,
              codperiodo = req.body.periodo,
              proximaexecucao = v_horainicio;

        return db.sequelize.query('UPDATE tb_parametro SET num_frequenciaverificacao = :frequenciaverificacao, boo_gerarlog = :gerarlog, dt_horainicio = :horainicio, dt_proximaexecucao = :proximaexecucao, cod_periodoverificacao = :codperiodo', { replacements: { frequenciaverificacao: frequenciaverificacao, gerarlog: gerarlog, horainicio: horainicio, proximaexecucao: proximaexecucao, codperiodo: codperiodo  }, type: sequelize.QueryTypes.UPDATE })
                           .then(retorno => res.status(201).send(retorno));

      },

      atualizaSmtp(req,res){

         const requerauth = req.body.requerauth,
               starttls = req.body.starttls,
               host = req.body.host,
               porta = req.body.porta,
               remetente = req.body.from;
        
        var query = '';
        var execucao;

        if(req.body.requerauth === true){

         const usuario = req.body.usuario,
               senha = req.body.senha;

               query = 'UPDATE tb_parametro SET boo_smtpauth = :requerauth, boo_smtpstarttls = :starttls, des_smtphost = :host, des_smtpport = :porta, des_emailfrom = :remetente, des_smtpusername = :usuario, des_smtppassword = :senha';
        
               execucao = db.sequelize.query(query, { replacements: { requerauth: requerauth, starttls: starttls, host: host, porta: porta, remetente: remetente, usuario: usuario, senha: senha  }, type: sequelize.QueryTypes.UPDATE })
                                      .then(retorno => res.status(201).send(retorno));

        } else {

               query = 'UPDATE tb_parametro SET boo_smtpauth = :requerauth, boo_smtpstarttls = :starttls, des_smtphost = :host, des_smtpport = :porta, des_emailfrom = :remetente';

               execucao = db.sequelize.query(query, { replacements: { requerauth: requerauth, starttls: starttls, host: host, porta: porta, remetente: remetente  }, type: sequelize.QueryTypes.UPDATE })
                                            .then(retorno => res.status(201).send(retorno));
        }


        return execucao;
        //return db.sequelize.query('UPDATE tb_parametro SET num_frequenciaverificacao = :frequenciaverificacao, boo_gerarlog = :gerarlog, dt_horainicio = :horainicio, dt_proximaexecucao = :proximaexecucao, cod_periodoverificacao = :codperiodo', { replacements: { frequenciaverificacao: frequenciaverificacao, gerarlog: gerarlog, horainicio: horainicio, proximaexecucao: proximaexecucao, codperiodo: codperiodo  }, type: sequelize.QueryTypes.UPDATE })
        //                   .then(retorno => res.status(201).send(retorno));

      },

/*
      atualiza(req, res) {


        var v_horainicio = this.calcula_proximaexecucao(req.body.horainicio);


        const emailfrom = req.body.emailfrom,
              frequenciaverificacao = req.body.frequenciaverificacao,
              gerarlog = req.body.gerarlog,
              horainicio = req.body.horainicio,
              proximaexecucao = v_horainicio,
              smtpauth = req.body.smtpauth,
              smtphost = req.body.smtphost,
              smtppassword = req.body.smtppassword,
              smtpport = req.body.smtpport,
              smtpstarttls = req.body.smtpstarttls,
              smtpusername = req.body.smtpusername,
              codmensagem = req.body.codmensagem,
              codperiodo = req.body.codperiodo,
              codigo = req.params.codigo;

              

              return db.sequelize.query('UPDATE tb_parametro SET des_emailfrom = :emailfrom, num_frequenciaverificacao = :frequenciaverificacao, boo_gerarlog = :gerarlog, dt_horainicio = :horainicio, dt_proximaexecucao = :proximaexecucao, boo_smtpauth = :smtpauth, des_smtphost = :smtphost, des_smtppassword = :smtppassword, des_smtpport = :smtpport, boo_smtpstarttls = :smtpstarttls, des_smtpusername = :smtpusername, cod_mensagem = :codmensagem, cod_periodoverificacao = :codperiodo WHERE cod_parametro = :codigo', { replacements: { emailfrom: emailfrom, frequenciaverificacao: frequenciaverificacao, gerarlog: gerarlog, horainicio: horainicio, proximaexecucao: proximaexecucao, smtpauth: smtpauth, smtphost: smtphost, smtppassword: smtppassword, smtpport: smtpport, smtpstarttls: smtpstarttls, smtpusername: smtpusername, codmensagem: codmensagem, codperiodo: codperiodo, codigo: codigo  }, type: sequelize.QueryTypes.UPDATE })
                                  .then(retorno => res.status(201).send(retorno));

      },
*/
      calcula_proximaexecucao(horainicio){


              var retorno = '';
              var m = moment();
              var antigomomento = m.format('YYYY-MM-DD')+"T"+m.format('HH:mm:ss'); 
              var novomomento = m.format('YYYY-MM-DD')+"T"+horainicio+":00";
              
              console.log("Antigo Momento: " + antigomomento);
              console.log("Novo Momento: " + novomomento);
              console.log(moment(novomomento).isSameOrBefore(antigomomento));

              if (moment(novomomento).isSameOrBefore(antigomomento)){

                  this.retorno = moment(novomomento).add(1, 'd').toISOString(true).split('.')[0];

              }
              else
              {

                this.retorno = novomomento;
              
              }

              return this.retorno;

     },

     testeapi(req, res){

          return res.status(200).send();

     }

};
