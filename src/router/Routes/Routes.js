import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import PerServiceDetails from "../../Pages/Home/Services/PerServiceDetails";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/perServiceDetails/:id',
                element: <PerServiceDetails></PerServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
        ]
    }
]);

export default router;