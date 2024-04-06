import { useEffect, useState } from "react";
import NavBarDesktop from "./NavBarDesktop";
import Notifications from "./Notifications";
import NavBarMobile from "./NavBarMobile";
const BREAKPOINT = 640;

const App = ({main}: {main: JSX.Element}) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [ isMobile, setIsMobile ] = useState( window.innerWidth < BREAKPOINT );

    const handleResize = () => {
        setShowNotifications(false)
        setIsMobile( window.innerWidth < BREAKPOINT );
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const desktop = (
        <div className="d-flex flex-row">
            <div className="flex-grow-1">
                <NavBarDesktop showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
                {main}
            </div>
            <Notifications setShowNotifications={setShowNotifications} isMobile={false} />
        </div>
    );

    const mobile = (
        <div style={{ maxWidth: "640px" }}>
            <NavBarMobile setShowNotifications={setShowNotifications} />
            {(showNotifications) ? <Notifications setShowNotifications={setShowNotifications} isMobile={true} /> : main }
        </div>
    );

    return (isMobile) ? mobile : desktop;
}

export default App;
