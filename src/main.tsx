import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBarDesktop from './components/NavBarDesktop';
import NavBarMobile from './components/NavBarMobile';
import Notification from './components/Notification';
import App from './App';

const router = createBrowserRouter([
    { path: "/", element: <App />, },
    { path: "/desktop", element: <NavBarDesktop showNotifications={false} setShowNotifications={undefined} />, },
    { path: "/mobile", element: <NavBarMobile />, },
    { path: "/notification", element: <Notification event={{name: "041223 - Building Responsive Web Applications", type: "course", cohort: "62", date: "2024-04-10 09:30:00"}} />, },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
