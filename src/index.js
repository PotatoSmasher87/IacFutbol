const express = require("express");
const app = express()
const Sequelize = require('sequelize');
const sequelize = require("./database/database");



app.listen(3000)

console.log("Server is listening on port 3000")




const Clubes = require("./models/Clubes.models")(sequelize);
const Provincias = require("./models/Provincias.model")(sequelize);
const Localidades = require("./models/Localidades.models")(sequelize);
const Personas = require('./models/Personas.models')(sequelize);
const PersonasRol = require('./models/PersonasRol.models')(sequelize);
const PersonasTipo = require('./models/PersonasTipo.models')(sequelize);



Clubes.belongsTo(Provincias,{ sourceKey: 'idProvincia', foreignKey: 'idProv' });
Clubes.belongsTo(Localidades,{ sourceKey: 'idLocalidad', foreignKey: 'idLoc' });
Localidades.belongsTo(Provincias,{ sourceKey: 'idProvincia', foreignKey: 'idProv' });
Personas.belongsTo(PersonasRol,{ sourceKey: 'idPersonaRol', foreignKey: 'idRol' });
Personas.belongsTo(PersonasTipo,{ sourceKey: 'idPersonaTipo', foreignKey: 'idTipo' });
Personas.belongsTo(Clubes,{ sourceKey: 'idClub', foreignKey: 'idClub' });



sequelize.sync({ alter: true }).then((data)=> {

  parametros = {nombre: "Enkaramessichikito",idProv: 2};

  return   Clubes.update(parametros,{
    where: {
        idClub: 5
    }
})
}
  ).then(()=>  console.log('Database connected...')


).catch(async (e)=>{
    console.log(e);
    console.log('No database was found');
  })






//   const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.clubes = require("./models/Clubes.models")(sequelize, Sequelize);
// db.provincias = require("./models/Provincias.model")(sequelize, Sequelize);
// db.localidades = require("./models/Localidades.models")(sequelize, Sequelize);
// db.provincias.hasMany(db.clubes, { as: "clubes" });
// db.clubes.belongsTo(db.provincias, {
//   foreignKey: "idProvincia",
//   as: "provincia",
// });
// db.provincias.hasMany(db.localidades, { as: "localidades" });
// db.localidades.belongsTo(db.provincias, {
//   foreignKey: "idProvincia",
//   as: "provincia",
// });
// module.exports = db


// sequelize.sync({ alter: true }).then((data)=> {

//   return Provincias.bulkCreate([
//     { nombre: "Buenos Aires"},
//     { nombre: "Buenos Aires-GBA"},
//     { nombre: "Capital Federal"},
//     { nombre: "Catamarca"},
//     { nombre: "Chaco"},
//     { nombre: "Chubut"},
//     { nombre: "Córdoba"},
//     { nombre: "Corrientes"},
//     { nombre: "Entre Ríos"},
//     { nombre: "Formosa"},
//     { nombre: "Jujuy"},
//     { nombre: "La Pampa"},
//     { nombre: "La Rioja"},
//     { nombre: "Mendoza"},
//     { nombre: "Misiones"},
//     { nombre: "Neuquén"},
//     { nombre: "Río Negro"},
//     { nombre: "Salta"},
//     { nombre: "San Juan"},
//     { nombre: "San Luis"},
//     { nombre: "Santa Cruz"},
//     { nombre: "Santa Fe"},
//     { nombre: "Santiago del Estero"},
//     { nombre: "Tierra del Fuego"},
//     { nombre: "Tucumán"},
//   ])
// }
//   ).then(()=>  console.log('Database connected...')


// ).catch(async (e)=>{
// console.log(e);
// console.log('No database was found');
// })

// const modelclub = require("./models/Clubes.models")
// const modelpers = require("./models/Personas.models")
//  const modelprov = require('./models/Provincia.models')
// const modelloc = require('./models/Localidades.models')
// const modeltipo = require('./models/PersonasTipo.models')
// const modelrol = require('./models/PersonasRol.models')



// sequelize.sync({ alter: true }).then((data)=> {

//   return Clubes.bulkCreate([
//     { nombre: "tallarines", idProv: 1},
//     { nombre: "Dalebocabocaboca", idProv: 1},
//   ])
// }
//   ).then(()=>  console.log('Database connected...')


// ).catch(async (e)=>{
//     console.log(e);
//     console.log('No database was found');
//   })