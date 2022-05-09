//~ IMPORTATION MODULES
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },

    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },

    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    role_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    info: {
        type: DataTypes.VIRTUAL,
        get(){
            return `Utilisateur : ${this.username}, with email : ${this.email}`;
        }
    }

}, {
    sequelize,
    tableName: 'user'
});

module.exports = User;