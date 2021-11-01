const express = require('express');
const router = express.Router();

const personajesController = require("../controllers/personajesControllers");

router.get('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, personajesController.getAll);
router.get('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, personajesController.getById);
router.post('/', (req,res,next)=>{req.app.validateUser(req,res,next)}, personajesController.create);
router.put('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, personajesController.update);
router.delete('/:id', (req,res,next)=>{req.app.validateUser(req,res,next)}, personajesController.delete);

module.exports = router;