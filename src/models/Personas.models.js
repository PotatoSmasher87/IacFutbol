
const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
    const Personas = sequelize.define('Personas', {
        idPersona: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        apellido: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.INTEGER
        },
        nroCarnet: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: true
    });
    return Personas;
}














// const Sequelize = require('sequelize');
// const {DataTypes} = Sequelize
// const sequelize = require('../database/database');
// const Clubes = require('./Clubes.models');
// const PersonaTipo = require('./PersonasTipo.models');
// const PersonaRol = require('./PersonasRol.models');



// const Personas = sequelize.define('Personas', {
//     idPersona: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nombre: {
//         type: DataTypes.STRING
//     },
//     apellido: {
//         type: DataTypes.STRING
//     },
//     dni: {
//         type: DataTypes.INTEGER
//     },
//     nroCarnet: {
//         type: DataTypes.INTEGER
//     }
// }, {
//     freezeTableName: true,
//     timestamps: true
// });



// Clubes.hasMany(Personas);
// PersonaRol.hasMany(Personas);
// PersonaTipo.hasMany(Personas);
// Personas.belongsTo(PersonaRol);
// Personas.belongsTo(PersonaTipo);
// Personas.belongsTo(Clubes);

// module.exports = Personas;
