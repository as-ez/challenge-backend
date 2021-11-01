const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Personaje extends Model {}
Personaje.init({

    //imagen: DataTypes.BLOB,
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    peso: DataTypes.DOUBLE,
    historia: DataTypes.TEXT
    // asociados: DataTypes.
    
}, {
    sequelize,
    modelName: "personajes"
});

module.exports = Personaje;