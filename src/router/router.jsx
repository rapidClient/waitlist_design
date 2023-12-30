
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about";

const router = createBrowserRouter([
  
  // {
  //   path: "*",
  //   element: <NotFound />, //404 page 
   
  // },
  {
    path: "/",
    element: <Home />, //Homepage layout
   
  },

  {
    path: '/about',
    element: <AboutUs /> // The about page
  },
  
]);

export default router;
