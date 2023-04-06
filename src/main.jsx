import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop'
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders'
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import cartProductsLoader from './Loader/cartProductLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        // loader: () => fetch('products.json')
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
