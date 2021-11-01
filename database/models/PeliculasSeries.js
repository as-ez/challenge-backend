const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Pelicula extends Model {}
Pelicula.init({

    //imagen: DataTypes.BLOB,
    titulo: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    historia: DataTypes.TEXT,
    
}, {
    sequelize,
    modelName: "peliculas"
});

module.exports = Pelicula;