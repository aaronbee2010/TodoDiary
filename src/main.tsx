import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import { RouterProvider, createBrowserRouter, Navigate, } from 'react-router-dom';
import DailySchedules from './DailySchedules';
import ModuleDetails from './ModuleDetails';
import CourseDates from './CourseDates';
import AssignmentDueDates from './AssignmentDueDates';

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/timetable" />, },
    { path: "/timetable", element: <Navigate to="/timetable/dailyschedules" />, },
    { path: "/timetable/dailyschedules", element: <DailySchedules />, },
    { path: "/timetable/moduledetails", element: <ModuleDetails />, },
    { path: "/reminders", element: <Navigate to="/reminders/coursedates" />, },
    { path: "/reminders/coursedates", element: <CourseDates />, },
    { path: "/reminders/assignmentduedates", element: <AssignmentDueDates />, },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
