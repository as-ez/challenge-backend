const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Debe ser un correo valido"
            }
        }
    },
    password: DataTypes.STRING,
}, {
    sequelize,
    modelName: "user"
});

module.exports = User;