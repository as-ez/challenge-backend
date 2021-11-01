const personajeModel = require('../database/models/Personajes');
const Pelicula = require('../database/models/PeliculasSeries');

module.exports={

    // Obtener persona (muestra solo el nombre y su edad)
    getAll:async function(req, res, next){
        try{
            const personajes = await personajeModel.findAll({
                attributes: ['nombre','edad']
            })
            res.json(personajes)
        }catch(e){
            next(e)
        }
    },
    // Crear nuevo personaje
    create:async function(req, res, next){
        try{
            const personaje = await personajeModel.create({
                nombre: req.body.nombre,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia
            })
            res.json(personaje)
        }catch(e){
            next(e)
        } 
    },
    // Obtener personaje mediante ID
    getById:async function(req, res, next){
        try{
            const personaje = await personajeModel.findByPk(
                req.params.id, {include: [Pelicula]
            })
            res.json(personaje)
        }catch(e){
            next(e)
        }
    },
    // Actualizar personaje
    update:async function(req, res, next){
        try{
            const personaje = await personajeModel.update({
                nombre: req.body.nombre,
                edad: req.body.edad,
                peso: req.body.peso,
                historia: req.body.historia
            },{
                where: {
                    id: req.params.id
                }
            })
            res.json(personaje)
        }catch(e){
            next(e)
        }
    },
    // Eliminar personaje
    delete:async function(req, res, next){
        try{
            const personaje = await personajeModel.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            res.json(personaje)
        }catch(e){
            next(e)
        }
    }
}