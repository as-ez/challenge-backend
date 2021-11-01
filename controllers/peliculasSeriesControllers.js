const peliSerieModel = require('../database/models/PeliculasSeries');
const Personaje = require('../database/models/Personajes');

module.exports={

    // Obtener peliSerie (muestra solo el titula y la fecha de creacion)
    getAll:async function(req, res, next){
        try{
            const peliSerie = await peliSerieModel.findAll({
                attributes: ['titulo','fechaCreacion']
            })
            res.json(peliSerie)
        }catch(e){
            next(e)
        }
    },
    // Crear nuevo peliSerie
    create:async function(req, res, next){
        try{
            const peliSerie = await peliSerieModel.create({
                titulo: req.body.titulo,
                fechaCreacion: req.body.fechaCreacion,
                calificacion: req.body.calificacion,
                historia: req.body.historia
            })
            res.json(peliSerie)
        }catch(e){
            next(e)
        } 
    },
    // Obtener peliSerie mediante ID
    getById:async function(req, res, next){
        try{
            const peliSerie = await peliSerieModel.findByPk(
                req.params.id, {include: [Personaje]
            })
            res.json(peliSerie)
        }catch(e){
            next(e)
        }
    },
    // Actualizar peliSerie
    update:async function(req, res, next){
        try{
            const peliSerie = await peliSerieModel.update({
                titulo: req.body.titulo,
                fechaCreacion: req.body.fechaCreacion,
                calificacion: req.body.calificacion,
                historia: req.body.historia
            },{
                where: {
                    id: req.params.id
                }
            })
            res.json(peliSerie)
        }catch(e){
            next(e)
        }
    },
    // Eliminar peliSerie
    delete:async function(req, res, next){
        try{
            const peliSerie = await peliSerieModel.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            res.json(peliSerie)
        }catch(e){
            next(e)
        }
    }
}