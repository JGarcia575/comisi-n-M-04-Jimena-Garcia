authRouter = require('express').Router();

const {
    authentication,
    checkToken
} = require('./../controllers/authController');

//Acceso a la ruta para autenticar el usuario
authRouter.post('/auth', authentication);

//Acceso a la ruta para verificar el token
authRouter.post('/verificar-Token', checkToken);


module.exports = authRouter;