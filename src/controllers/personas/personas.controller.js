const sequelize = require("./database/database");
const Personas = require('../../models/Personas.models')(sequelize);


module.exports.getPersonas = async (req,res) =>{

    try{

        const listaPersonas = await Personas.findAll()

    console.log(listaPersonas);
    res.send('gettin Personas')
    
    } catch{

        return res.status(500)

    }
};

module.exports.getPersona = async (req,res) =>{

    try{

        const idPersona = req.params;

        const listaPersona = await Personas.findByPk(idClub)

    console.log(listaPersona);
    res.send('gettin club')
    
    } catch{

        return res.status(500)

    }
};

module.exports.createPersonas = async (req,res) =>{

    try{

    const {nombre,apellido,dni,nroCarnet} = req.body
    const fechaCreacion = Date.now();

    const newPersona = await Personas.create({
        nombre,
        apellido,
        dni,
        nroCarnet
    })

    console.log(newPersona);

    res.send('creating Personas')
    } catch{

    return res.status(500)

    }

};

module.exports.deleteClubes = async (req,res) =>{

    try{
    

    await Clubes.destroy({
        where: {
            idClub: req.body.idClub
        }
    })

    console.log('Persona borrada');
    res.send('Persona borrada')
    } catch{

        return res.status(500)
    }
};


module.exports.updatePersonas = async (req,res) =>{

    try{
    
    const parametros = req.body;
    const id = req.params;
    
    await Personas.update(parametros, {
        where: {
            idClub: id
        }
    })

    res.send('Club Actualizado')

    } catch{

        return res.status(500)
        
    }
};