import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import { RouterProvider, createBrowserRouter, Navigate, } from 'react-router-dom';
import DailySchedules from './DailySchedules';

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/timetable/dailyschedules" />, },
    { path: "/timetable", element: <Navigate to="/timetable/dailyschedules" />, },
    { path: "/timetable/dailyschedules", element: <DailySchedules />, },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
