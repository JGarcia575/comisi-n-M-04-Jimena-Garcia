import { RouterProvider } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";
import { router } from "./router";


function App() {
  return (
    <>
      <DefaultLayout>
        <RouterProvider router={router} />
      </DefaultLayout>
      
    </>
  )
}

export default App
