const  express = require('express');
const router = express.Router();

const {
    allUsers,
    user,
    newUser,
    deleteUser,
    updateUser
} = require('../controllers/userController');

//Ruta para ver todos los usuarios
router.get('/users', allUsers);

//Ruta para mostrar un usuario en particular
router.get('/user', user);

//Ruta para crear un usuario
router.post('/new', newUser);

//Ruta para borrar un usuario
router.delete('/delete', deleteUser);

router.put('/update', updateUser);

module.exports = router;