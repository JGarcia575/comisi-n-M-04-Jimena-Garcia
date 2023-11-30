const  express = require('express');
const postRouter = express.Router();

const {
    posts,
    post,
    newPost,
    deletePost,
    updatePost
} = require('../controllers/postController');

//Ruta para ver todas las publicaciones
postRouter.get('/posts', posts);

//Ruta para mostrar un usuario en particular
postRouter.get('/post/:id', post);

//Ruta para crear un usuario
postRouter.post('/newPost', newPost);

//Ruta para borrar un usuario
postRouter.delete('/deletePost', deletePost);

postRouter.put('/updatePost', updatePost);

module.exports = postRouter;
