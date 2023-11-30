const { Sequelize } = require('sequelize');

const nombre_bd = process.env.DB_NAME;
const nombre_usuario = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const dialecto = process.env.BD_DIALECTO
const host = process.env.HOST;

const sequelize = new Sequelize(nombre_bd, nombre_usuario, password, {
    host:  host,
    dialect: dialecto
});

const mysqlConexion = async () => {
    try {
        await sequelize.sync();
        console.log('¡Conexión exitosa!');
      } catch (error) {
        console.error('¡La conexión falló', error);
      }
}

module.exports = { sequelize, mysqlConexion };