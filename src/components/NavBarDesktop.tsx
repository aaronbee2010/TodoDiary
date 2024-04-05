import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBarDesktop = ({showNotifications, setShowNotifications}: {showNotifications: boolean, setShowNotifications: any}) => {
    const toggleNotifications = () => {
        const notificationContainer = document.getElementById("notificationContainer");
    
        if (notificationContainer) {
            notificationContainer.style.display = (showNotifications) ? "block" : "none";
        }
    }
    useEffect(() => {
        toggleNotifications();
    }, [showNotifications]);

    const [timetableSelected, setTimetableSelected] = useState("");
    const [dailySchedulesSelected, setDailyScheduledSelected] = useState("");
    const setBoldLinks = () => {
        switch (window.location.pathname) {
            case "/timetable/dailyschedules":
                setTimetableSelected("600");
                setDailyScheduledSelected("600");
                break;
        }
    }
    useEffect(() => {
        setBoldLinks();
    }, [window.location.pathname]);

    return (
        <>
            <div id="nav1" style={{ backgroundColor: "#409FBF", color: "#FFFFFF" }}>
                <div id="nav1-main" className="d-flex flex-row justify-content-between px-4 py-2 mx-auto align-middle" style={{ maxWidth: "1280px" }}>
                    <div><Link to="/" id="logo">TodoDiary</Link></div>
                    <div id="nav1-links" className="d-flex flex-row justify-content-between mx-8">
                        <div className="mx-3 my-auto"><Link to="/timetable" id="nav1-link-timetable" className="nav1-glow" style={{ fontWeight: timetableSelected }}>Timetable</Link></div>
                        <div id="nav1-link-reminders" className="mx-3 my-auto nav1-glow">Reminders</div>
                    </div>
                    <div id="notifications" className="my-auto" style={{marginLeft: "100.82px"}} onClick={() => {setShowNotifications((prevState: boolean) => !prevState)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell nav1-glow" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="nav2" style={{ backgroundColor: "#E0E8EB" }}>
                <div className="d-flex flex-row justify-content-center px-2 py-2 mx-auto align-middle">
                    <div className="mx-3 my-auto nav2-links" style={{ fontWeight: dailySchedulesSelected }}><Link to="/timetable/dailyschedules" id="nav2-link-dailyschedules">Daily Schedules</Link></div>
                    <div id="nav2-link-moduledetails" className="mx-3 my-auto nav2-links">Module Details</div>
                </div>
            </div>
        </>
    )
}

export default NavBarDesktop;
