import { createBrowserRouter } from "react-router";
import MainHome from "../component/layout/MainHome";
import Home from "../component/pages/Home";
import Plants from "../component/pages/Plants";
import Profile from "../component/pages/Profile";
import Login from "../component/pages/Login";
import SignUp from "../component/pages/SignUp";
const router=createBrowserRouter([

{
    path: '/',
    element: <MainHome></MainHome>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/plants',
            element:<Plants></Plants>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        }
    ]
},
{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/signup',
    element:<SignUp></SignUp>
}

])

export default router;