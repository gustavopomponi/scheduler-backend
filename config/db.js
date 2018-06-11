const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

/*//Models/tables
db.cliente = require('../models/cliente')(sequelize,Sequelize);
db.clienteendereco = require('../models/clienteendereco')(sequelize,Sequelize);
db.endereco = require('../models/endereco')(sequelize,Sequelize);
db.formapagamento = require('../models/formapagamento')(sequelize,Sequelize);
db.grupoproduto = require('../models/grupoproduto')(sequelize,Sequelize);
db.nota = require('../models/nota')(sequelize, Sequelize);
db.notaformapagamento = require('../models/notaformapagamento')(sequelize,Sequelize);
db.notaproduto = require('../models/notaproduto')(sequelize,Sequelize);
db.produto = require('../models/produto')(sequelize, Sequelize);
db.produtovenda = require('../models/produtovenda')(sequelize,Sequelize);
db.telefonecliente = require('../models/telefonecliente')(sequelize,Sequelize);
db.telefonefornecedor = require('../models/telefonefornecedor')(sequelize,Sequelize);
db.tipoparentesco = require('../models/tipoparentesco')(sequelize,Sequelize);
db.tipotelefone = require('../models/tipotelefone')(sequelize,Sequelize);
db.vendanota = require('../models/vendanota')(sequelize,Sequelize);
db.fornecedor = require('../models/fornecedor')(sequelize,Sequelize);
db.fornecedorendereco = require('../models/fornecedorendereco')(sequelize,Sequelize);
db.fornecedorproduto = require('../models/fornecedorproduto')(sequelize,Sequelize);
db.unidademedida = require('../models/unidademedida')(sequelize,Sequelize);

//Relations

db.produto.belongsToMany(db.vendanota, { through: db.produtovenda });
db.vendanota.belongsToMany(db.produto, { through: db.produtovenda });
db.cliente.hasMany(db.vendanota);
db.cliente.hasMany(db.nota);
db.nota.hasMany(db.vendanota);
db.nota.belongsToMany(db.formapagamento, { through: db.notaformapagamento });
db.formapagamento.belongsToMany(db.nota, { through: db.notaformapagamento });
db.tipotelefone.hasMany(db.telefonecliente, { foreignKey: { name: 'tipotelefone_id', as: 'TipoTelefone', allowNull: false }});
db.telefonecliente.belongsTo(db.tipotelefone, { foreignKey:'tipotelefone_id', as: 'Tipo' });
db.tipotelefone.hasMany(db.telefonefornecedor);
db.cliente.hasMany(db.telefonecliente, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
db.fornecedor.hasMany(db.telefonefornecedor);
db.cliente.belongsToMany(db.endereco, { as: 'Endereco', through: db.clienteendereco, foreignKey:'cliente_id' });
db.endereco.belongsToMany(db.cliente, { as: 'Cliente', through: db.clienteendereco, foreignKey:'endereco_id' });
db.fornecedor.belongsToMany(db.endereco, { as: 'Endereco', through: db.fornecedorendereco, foreignKey:'fornecedor_id' });
db.endereco.belongsToMany(db.fornecedor, { as: 'Fornecedor', through: db.fornecedorendereco, foreignKey:'endereco_id' });
db.cliente.hasMany(db.cliente, { foreignKey: 'conta_principal_id', as: 'Children', });
db.cliente.belongsTo(db.cliente, { foreignKey: 'conta_principal_id', as: 'Parent', });
db.tipoparentesco.hasMany(db.cliente, {foreignKey: 'tipoparentesco_id', as: 'Cliente'});
db.cliente.belongsTo(db.tipoparentesco, {foreignKey: 'tipoparentesco_id', as: 'TipoParentesco'});
db.fornecedor.belongsToMany(db.produto, { through: db.fornecedorproduto });
db.produto.belongsToMany(db.fornecedor, { through: db.fornecedorproduto });
db.unidademedida.hasMany(db.produto, { foreignKey:'unidademedida_id', as: 'Produto' } );
db.produto.belongsTo(db.unidademedida, { foreignKey:'unidademedida_id', as: 'UnidadeMedida' } );
db.grupoproduto.hasMany(db.produto, { foreignKey:'grupoproduto_id', as: 'Produto' } );
db.produto.belongsTo(db.grupoproduto, { foreignKey:'grupoproduto_id', as: 'Grupo' } );

//db.produto.belongsToMany(db.nota, { through: db.notaproduto });
//db.nota.belongsToMany(db.produto, { through: db.notaproduto });

//db.nota.belongsTo(db.cliente);
*/

module.exports = db;
