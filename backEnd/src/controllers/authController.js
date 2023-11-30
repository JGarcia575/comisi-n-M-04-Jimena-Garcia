const jwt = require('jsonwebtoken');

const authenticationController = {};

const JWT_KEY = process.env.JWT_KEY;

authenticationController.authentication = (req, res) => {
    const { id, nombreUsuario } = req.body;
    const usuario = {
        id: id,
        nombre: nombreUsuario
    };
    // Creación del token
    let token = jwt.sign(usuario, JWT_KEY);

    res.json({ token: token});
};

authenticationController.registrar = (req, res) => {
    //simular registro
};

authenticationController.checkToken = (req, res) => {
    const token = req.body.token;

    try {
        let verificacion = jwt.verify(token, JWT_KEY);
        res.json(verificacion);
    } catch (error) {
        res.status(500).json({ mensaje: error});
    };
};

module.exports = authenticationController;
