const {
    Sequelize
} = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()
const dbconnection = new Sequelize({
    host: process.env.db_host,
    dialect: 'mysql',
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db,
    define: {
        timestamps: false,
       
    },
    logging: false


});

module.exports = dbconnection