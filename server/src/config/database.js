const { Sequelize } = require('sequelize');
require('dotenv').config();  // Cargar las variables de entorno desde .env

const sequelize = new Sequelize(
  process.env.DB_NAME,         // Nombre de la base de datos
  process.env.DB_USER,         // Usuario de la base de datos
  process.env.DB_PASS,         // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Servidor de la base de datos
    dialect: process.env.DB_DIALECT,  // Dialecto (mysql, postgres, etc.)
    logging: false
  }
);

module.exports = sequelize;
