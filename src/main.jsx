import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/LayOut/Home';
import Cart from './Components/Cart/Cart';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import { cartProductsLoader } from './Loaders/cartProductsLoader';
import CheckOut from './Components/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path : '/',
        element : <App></App>
      },
      {
        path : 'orders',
        element : <Orders></Orders>,
        loader : cartProductsLoader
      },
      {
        path : 'inventory',
        element : <Inventory></Inventory>
      },
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path:'checkOut',
        element : <CheckOut></CheckOut>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)
