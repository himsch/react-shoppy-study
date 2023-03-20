import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import AllProducts from './pages/AllProducts.jsx';
import NewProduct from './pages/NewProduct.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import MyCart from './pages/MyCart.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <AllProducts />,
      },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
