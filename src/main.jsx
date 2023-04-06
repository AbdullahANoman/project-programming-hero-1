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
        loader : () => fetch('products.json')
      },
      {
        path : 'inventory',
        element : <Inventory></Inventory>
      },
      {
        path : 'login',
        element : <Login></Login>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />

)
