const Personaje = require('./models/Personajes');
const Pelicula = require('./models/PeliculasSeries');
//const Genero = require('./models/Generos');

// personaje tiene muchas peliculas
// se añade una clave personajeId a la tabla Pelicula
Personaje.hasMany(Pelicula, {foreignKey: "personaje_id"});

// Se añade una clave personajeId a la tabla pelicula
Pelicula.belongsTo(Personaje, {foreignKey:"personaje_id"});