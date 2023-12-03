const  express = require('express');
const commentRouter = express.Router();

const {
    comments,
    comment,
    newComment,
    deleteComment,
    updateComment
} = require('../controllers/commentController');

//Ruta para ver todos los comentarios de una publicación
commentRouter.get('/:post', comments);

//Ruta para mostrar un comentario en particular
commentRouter.get('/:idComment', comment);

//Ruta para crear un comentario
commentRouter.post('/newComment/', newComment);

//Ruta para borrar un comentario
commentRouter.delete('/deleteComment', deleteComment);

//Ruta para actualizar un comentario
commentRouter.put('/updateComment', updateComment);

module.exports = commentRouter;