import { useState } from "react";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";

const App = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="d-flex flex-row">
            <div className="flex-grow-1">
                <NavBar showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
            </div>
            <Notifications setShowNotifications={setShowNotifications} />
        </div>
    );
}

export default App;
