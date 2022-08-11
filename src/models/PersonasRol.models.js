// const Sequelize = require('sequelize');
// const {DataTypes} = Sequelize
// const sequelize = require('../database/database');

const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {
const PersonaRol = sequelize.define('personaRol', {
    idPersonaRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreRol: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
    unique: true
});
return PersonaRol;
}

// module.exports = PersonaRol;