const Post = require('../models/postModel');

const postController = {};


//Ver todas las publicaciones
postController.posts = async (req, res) => {
    try {
        const posts = await Post.find({})

        res.json(posts);
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar mostrar las publicaciones',
            error: error
        })
    };
};
//Ver una publicación
postController.post = async (req, res) => {
    try {
        const { id }  = req.params;    

        const post = await Post.findById(id)

        res.json(post);

    } catch (error) {
        let mensaje = 'Ocurrió un error al intentar mostrar la publicación';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener la publicación con ese id'
        }    

        res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    };    
};

//Crear publicación
postController.newPost = async (req, res) => {
    try {
        const { title, description, author } = req.body;

        const post = new Post ({
            title: title,
            description: description,
            author: author
        });

        await post.save();

        res.status(201).json({mensaje: 'Publicación creada exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear la publicación',
            error: error
        });
    };    
};

//Borrar publicación
postController.deletePost = async (req, res) => {
    try {
        const { id }  = req.body;
        
        await Post.findByIdAndDelete(id);

        res.status(200).json({ mensaje: 'Publicación borrada exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar borrar la publicación',
            error: error
        });
    };
};

//Actualizar publicación
postController.updatePost = async(req, res) => {
    try {
        const { id, title, description, author} = req.body;

        const post = {
            title: title,
            description: description,
            author: author
        };
        
        await Post.findByIdAndUpdate(id, post);

        res.status(200).json({ mensaje: 'Publicación actualizada exitosamente' });        
            
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al actualizar la publicación',
            error: error
        });
    };
};

// Exportamos el controlador
module.exports = postController;