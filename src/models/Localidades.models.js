const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
const Localidades = sequelize.define('localidades', {
    idLocalidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});
    return Localidades;
  };






// const Sequelize = require('sequelize');
// const {DataTypes} = Sequelize
// const sequelize = require('../database/database');

// const Localidades = sequelize.define('localidades', {
//     idLocalidad: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: DataTypes.STRING
//     }
// }, {
//     freezeTableName: true,
//     timestamps: false
// });

// module.exports = Localidades;