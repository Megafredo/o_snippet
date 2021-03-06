// ~ IMPORTATION MODULE
const { Sequelize } = require('sequelize');

//~ CONNEXION DB
function getConnexion(){

    return new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PWD,
        {
            
            define: {
                timestamps: false,
                createdAt : "created_at",
                updatedAt : "updated_at"
            },

            host: process.env.DB_HOST,
            dialect: process.env.DB_ENV,
            logging: false
        }
    )

};

module.exports = getConnexion();
