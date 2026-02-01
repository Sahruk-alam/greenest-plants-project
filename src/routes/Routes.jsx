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
import AuthLayout from "../component/layout/AuthLayout";
import UpdateProfile from "../component/pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <CommonLayout></CommonLayout>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoutes>
        <Details></Details>
      </PrivateRoutes>
    ),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/update",
    element: <UpdateProfile></UpdateProfile>,
  },
]);

export default router;
