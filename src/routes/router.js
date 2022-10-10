import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Chart from "../Components/Chart/Chart";
import Home from "../Components/Home/Home";
import Main from "../Components/main/Main";
import Shop from "../Components/Shop.js/Shop";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>Error</h1>,
        loader: () => fetch('tshirt.json'),
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

                path: '/shop',
                element: <Shop></Shop>,
                loader: () => fetch('tshirt.json')

            },
            {

                path: '/chart',
                element: <Chart></Chart>

            },




        ]

    }






])