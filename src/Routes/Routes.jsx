import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blogs/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/all-toys',
          element: <AllToys></AllToys>
        },
        {
          path:'/my-toys',
          element: <MyToys></MyToys>
        },
        {
          path:'/add-a-toy',
          element: <AddAToy></AddAToy>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        }
      ]
    },
  ]);


  export default router;