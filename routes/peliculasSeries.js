const express = require('express');
const router = express.Router();

const peliSerieController = require("../controllers/peliculasSeriesControllers");

//
router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)},peliSerieController.getAll)
router.get('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, peliSerieController.getById)
router.post('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, peliSerieController.create)
router.put('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)},peliSerieController.update)
router.delete('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)},peliSerieController.delete)


module.exports = router;