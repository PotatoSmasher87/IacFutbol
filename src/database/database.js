const { Sequelize } = require('sequelize');

module.exports = new Sequelize('iacfbv1', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    // define:{
    //     freezeTableName: true
    // }
  })