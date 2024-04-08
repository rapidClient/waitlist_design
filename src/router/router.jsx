
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
  
  // {
  //   path: "*",
  //   element: <NotFound />, //404 page 
   
  // },
  {
    path: "/",
    element: <Home />, //Homepage layout
   
  },
  
]);

export default router;
