import { createBrowserRouter } from "react-router-dom";
import Home from "../componenets/pages/Home";
import Layout from "../layouts/Layout";
import Login from "../componenets/pages/Login";
import Register from "../componenets/pages/Register";
import GeustLayout from "../layouts/GeustLayout";
import AuthLayout from "../layouts/AuthLayout";
import UserDashboard from "../dashboard/userDashboard";

export const DASHBOARD_USER ="/user/dashboard"

export const routerh = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },

        ]
    },
    {
        element:<GeustLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:DASHBOARD_USER,
                element:<UserDashboard/>
            }
        ]
    }
])