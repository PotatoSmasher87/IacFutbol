const sequelize = require("./database/database");
const Clubes = require('../../models/Clubes.models')(sequelize);


module.exports.getClubes = async (req,res) =>{

    try{

        const listaClubes = await Clubes.findAll()

    console.log(listaClubes);
    res.send('gettin clubes')
    
    } catch{

        return res.status(500)

    }
};

module.exports.getClub = async (req,res) =>{

    try{

        const idClub = req.params;

        const listaClub = await Clubes.findByPk(idClub)

    console.log(listaClub);
    res.send('gettin club')
    
    } catch{

        return res.status(500)

    }
};

module.exports.createClubes = async (req,res) =>{

    try{

    const {nombre,idLoc,idProv} = req.body
    const fechaCreacion = Date.now();

    const newClub = await Clubes.create({
        nombre,
        idLoc,
        idProv,
    })

    console.log(newClub);

    res.send('creating clubes')
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

    console.log('Club borrado');
    res.send('Club borrado')
    } catch{

        return res.status(500)
    }
};


module.exports.updateClubes = async (req,res) =>{

    try{
    
    const parametros = req.body;
    const id = req.params;
    
    await Clubes.update(parametros, {
        where: {
            idClub: id
        }
    })

    res.send('Club Actualizado')

    } catch{

        return res.status(500)
        
    }
};


