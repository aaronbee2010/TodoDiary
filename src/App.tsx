import { useState } from "react";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";

const upcomingEvents = [
    {
        name: "Building Responsive Web Applications",
        type: "course",
        cohort: "041223",
        date: "2024-04-10 09:30:00",
    },
    {
        name: "A2.2 | Practice | Building Responsive Web Applications",
        type: "assignment",
        cohort: "041223",
        date: "2024-04-17 23:59:59",
    },
    {
        name: "Automation and Software Quality",
        type: "course",
        cohort: "041223",
        date: "2024-04-24 09:30:00",
    },
    {
        name: "A3.1 | Discover | Automation and Software Quality (Online)",
        type: "assignment",
        cohort: "041223",
        date: "2024-05-01 23:59:59",
    },
    {
        name: "A3.2 | Discover | Automation and Software Quality (Live)",
        type: "assignment",
        cohort: "041223",
        date: "2024-05-08 23:59:59",
    },
];

const App = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="d-flex flex-row">
            <div className="flex-grow-1">
                <NavBar showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
            </div>
            <Notifications upcomingEvents={upcomingEvents} setShowNotifications={setShowNotifications} />
        </div>
    );
}

export default App;
