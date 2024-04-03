import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBarDesktop from './components/NavBarDesktop';
import NavBarMobile from './components/NavBarMobile';

const router = createBrowserRouter([
    { path: "/", element: <NavBar />, },
    { path: "/desktop", element: <NavBarDesktop />, },
    { path: "/mobile", element: <NavBarMobile />, },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
