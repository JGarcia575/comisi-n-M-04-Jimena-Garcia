const Comment = require('../models/commentModel');
const Post = require('../models/postModel');

const commentController = {};

//Ver todos los comentarios
commentController.comments = async (req, res) => {
    try {
        const { post } = req.params

        const comment = await Comment.find({
            post: post
        }).populate('author', ['-__v', '-avatarURL', '-email', '-password']);

        res.json(comment);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar mostrar los comentarios',
            error: error
        })
    };
};
//Ver un comentario
commentController.comment = async (req, res) => {
    try {
        const { id }  = req.params;    

        const comment = await Comment.findById(id)

        res.json(comment);

    } catch (error) {
        let mensaje = 'Ocurrió un error al intentar mostrar el comentario';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el comentario con ese id'
        }    

        res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    };    
};

//Crear comentario
commentController.newComment = async (req, res) => {
    try {
        const { description, author, post} = req.body;

        const comment = new Comment ({
            description: description,
            author: author,
            post: post
            
        });

        await comment.save();

        await Post.updateOne({ id: post}, {$push: {comments: comment}});

        res.status(201).json({mensaje: 'comentario creado exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear el comentario',
            error: error
        });
    };    
};

//Borrar comentario
commentController.deleteComment = async (req, res) => {
    try {
        const { id }  = req.body;
        
        await Comment.findByIdAndDelete(id);

        res.status(200).json({ mensaje: 'Comentario borrado exitosamente' });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al intentar borrar el comentario',
            error: error
        });
    };
};

//Actualizar comentario
commentController.updateComment = async(req, res) => {
    try {
        const { id, description} = req.body;

        const comment = {
            description: description,
        };
        
        await Comment.findByIdAndUpdate(id, comment);
      
        res.status(200).json({ mensaje: 'Comentario actualizado exitosamente' });        
            
    } catch (error) {
        res.status(500).json({
            mensaje: 'Ocurrió un error al actualizar el comentario',
            error: error
        });
    };
};

// Exportamos el controlador
module.exports = commentController;