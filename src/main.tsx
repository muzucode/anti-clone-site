import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Header from "./Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },  
  {
    path: "/about-us",
    element: <AboutUs/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>

    <div className='w-full max-w-3xl mx-auto text-[#FFFDD0]'>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
    
  </React.StrictMode>


);