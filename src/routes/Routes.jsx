import { createBrowserRouter } from "react-router";
import MainHome from "../component/layout/MainHome";
import Home from "../component/pages/Home";
import Plants from "../component/pages/Plants";
import Profile from "../component/pages/Profile";
import Login from "../component/pages/Login";
import SignUp from "../component/pages/SignUp";
import Details from "../component/pages/Details";
import CommonLayout from "../component/layout/CommonLayout";
import PrivateRoutes from "../component/PrivateRoute/PrivateRoutes";
import Loading from "../component/pages/Loading";
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
    element:<PrivateRoutes>
        <Details></Details>
    </PrivateRoutes>,
    loader: ()=>fetch('/plants.json'),
    hydrateFallbackElement:<Loading></Loading>
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