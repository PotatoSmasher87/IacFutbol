// const Sequelize = require('sequelize');
// const {DataTypes} = Sequelize
// const sequelize = require('../database/database');

const { DataTypes } = require('sequelize')
module.exports = (sequelize) => {

const PersonaTipo = sequelize.define('personaTipo', {
    idPersonaTipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreTipo: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
    unique: true
});

return PersonaTipo;
}

// module.exports = PersonaTipo;

