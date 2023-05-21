import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../pages/Blogs/Blog";
import SingleToy from "../pages/SingleToy/SingleToy";
import UpdatedToy from "../pages/Update/UpdatedToy";
import PrivateRoute from "./PrivateRoute";


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
          element: <AllToys></AllToys>,
          loader:()=> fetch('http://localhost:5000/all-toys')
        },
        {
          path: '/all-toys/:id',
          element: <SingleToy></SingleToy>,
          loader:({params})=>fetch(`http://localhost:5000/all-toys/${params.id}`)
        },
        {
          path:'/my-toys',

          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader: ()=> fetch('http://localhost:5000/myCollection')
        },
        {
          path:'/add-a-toy',
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
          loader:()=> fetch('http://localhost:5000/all-toys')
        },
        {
          path:'/updatedtoy/:id',
          element: <UpdatedToy></UpdatedToy>,
          loader:({params})=> fetch(`http://localhost:5000/myCollection/${params.id}`)
          

        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        {
          path:'*',
          
        }
      ]
    },
  ]);


  export default router;