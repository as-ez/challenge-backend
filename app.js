const express = require('express');
const app = express()
const sequelize = require('./database/db');
require('./database/asociations');
const jwt = require('jsonwebtoken')


// Setting
const PORT = process.env.PORT || 3000;

app.set('secretKey',"node20213")

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
  res.json("Hola mundo");
});

app.use('/characters', require('./routes/personajes'));
app.use('/movies', require('./routes/peliculasSeries'));
app.use('/auth', require('./routes/auth'));

function validateUser(req,res,next){
  jwt.verify(req.headers['x-access-token'],req.app.get("secretKey"),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      console.log(decoded)
      req.body.tokenData = decoded
      next()
    }
  })
}

app.validateUser = validateUser;

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);

  // Conexion db
  sequelize.sync({ force: false }).then(() => {
      console.log("Conectado a la base de datos");
  }).catch(e => {
      console.log('Se ha producido un error', e);
  })
})