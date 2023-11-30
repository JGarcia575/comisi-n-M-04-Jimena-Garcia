import {
    createBrowserRouter    
  } from "react-router-dom";

//importar vistas
import { Inicio } from "./views/inicio";
import { Ingresar } from "./views/ingresar"
import { CrearPost } from "./views/post" 
import { BorrarPost } from "./views/borrar";
import { Registrarse } from "./views/registrarse";
import { EditarPost } from "./views/editar";
import { Ver } from "./views/ver";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />
    },
    {
        path: "/ingresar",
        element: <Ingresar />
    },
    {
      path: "/crear",
      element: <CrearPost />
    },
    {
      path: "/borrar/:id",
      element: <BorrarPost/>
    },
    {
      path: "/registrarse",
      element: <Registrarse />
    },
    {
      path: "/editar/:id",
      element: <EditarPost />
    },
    {
      path: "/ver/:id",
      element: <Ver />
    }             
  ]);

 export { router };