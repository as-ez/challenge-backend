const User = require('../database/models/Users')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require('../database/models/Users')

module.exports={
    create:async function(req, res, next){
        try{
            const password = bcrypt.hashSync(req.body.password, 10);
            const user = await userModel.create({
                name:req.body.name,
                email:req.body.email,
                password: password,
            })
            res.json({error:false,message:"Usuario creado correctamente!"})
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
    login:async function(req, res, next){
        try{
            const user = await userModel.findOne({where: {email: req.body.email}})
            if(!user){
                res.json({error:true,message:"Email incorrecto"})
                return
            }
            if(bcrypt.compareSync(req.body.password,user.password)){
                const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
                res.json({error:false,message:"Login OK",token:token})
                return
            }else{
                res.json({error:true,message:"Contraseña incorrecta"})
            }
        }catch(e){
            if(e.message){
                res.status(500).json({status:"error",mensaje:e.message})
                return
            }
            next(e)
        }
    },
}
