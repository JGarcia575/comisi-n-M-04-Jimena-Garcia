const mongoose = require('mongoose');

const db_mongo_uri = process.env.DB_MONGO_URI;

const mongoConexion = async () => {
    try {
        await mongoose.connect(db_mongo_uri);
        console.log('Conexión exitosa');
    } catch (error) {
        console.log('Error: ', error);
        
    };
};

module.exports = mongoConexion;