import axios from "axios";

const url = 'http://localhost:3000/post';

//Función que hace peticiones al backend para traer datos de la publicación por id
const verPostPorId = async(id) => {    
    const endPoint = url + '/' + id;

    try {
    	const respuesta = await axios.get(endPoint);

    	if (respuesta.status === 200) {
      		return respuesta.data;

      } else {
            return false;
      };
    } catch (error) {
    	return false;
    };    
};

export { verPostPorId };