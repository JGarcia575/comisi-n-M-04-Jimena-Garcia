require('dotenv').config();
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const router = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const authRouter = require('./routes/authRoutes');
const mongoConexion = require('./config/mongoConection'); 

const port = 3000;

//Middlewares
app.use(bodyParse.json());
app.use(cors());
app.use(helmet({contentSecurityPolicy: false }));
app.use(morgan("dev"));


//Rutas
app.use(router);
app.use(postRouter);
app.use(commentRouter);
app.use(authRouter);

//Conexión a base de datos mongo
mongoConexion();

//Levantar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

