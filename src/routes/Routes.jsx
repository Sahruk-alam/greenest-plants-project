import { createBrowserRouter } from "react-router";
import MainHome from "../component/layout/MainHome";
import Home from "../component/pages/Home";
import Plants from "../component/pages/Plants";
import Profile from "../component/pages/Profile";
import Login from "../component/pages/Login";
import SignUp from "../component/pages/SignUp";
import Details from "../component/pages/Details";
import Animation from "../component/Animation/Animation";
import PlantDetail from "../component/pages/PlantDetail";
import CommonLayout from "../component/layout/CommonLayout";
const router=createBrowserRouter([
{
    path: '/',
    element: <MainHome></MainHome>,
    children: [
        {
            path: '/',
            element: <div>
                <Home></Home>,
            <CommonLayout></CommonLayout>
            </div>
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
    path:'/details/:id',
    element:<Details></Details>
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