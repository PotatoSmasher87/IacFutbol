

const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
    const Clubes = sequelize.define('clubes', {
            idClub: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING
            }
        }, {
            freezeTableName: true,
            timestamps: true
        },
       );
 
  return Clubes;
    }




// module.exports = (sequelize, DataTypes) => {
// const Clubes = sequelize.define('clubes', {
//     idClub: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: DataTypes.STRING
//     }
// }, {
//     freezeTableName: true,
//     timestamps: true
// });
//     return Clubes;
//   };





// const Sequelize = require('sequelize');
// const {DataTypes} = Sequelize
// const sequelize = require('../database/database');
// // const Localidades = require('./Localidades.models');
// // const Provincias = require('./Provincias.models');


// const Clubes = sequelize.define('clubes', {
//     idClub: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: DataTypes.STRING
//     }
// }, {
//     freezeTableName: true,
//     timestamps: true
// });



// module.exports = Clubes;




