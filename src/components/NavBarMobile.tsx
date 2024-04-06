import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarMobile = ({setShowNotifications}: {setShowNotifications: any}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showTimetableSubmenu, setShowTimetableSubmenu] = useState(false);
    const [showRemindersSubmenu, setRemindersSubmenu] = useState(false);

    return (
        <div style={{ maxWidth: "640px", backgroundColor: "#409FBF", color: "#FFFFFF" }}>
            <div className="d-flex flex-row justify-content-between px-4 py-2 mx-auto align-middle">
                <div id="mobile-menu-icon" className="my-auto">
                    <svg onClick={() => { setShowNotifications(false); setShowTimetableSubmenu(false); setRemindersSubmenu(false); setShowMenu((prevState: boolean) => !prevState); } } xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <div><Link to="/" id="logo">TodoDiary</Link></div>
                <div onClick={() => { setShowMenu(false); setShowNotifications((prevState: boolean) => !prevState); } } id="notifications" className="my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell nav1-glow" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                    </svg>
                </div>
            </div>
            <div id="mobile-menu" style={{ backgroundColor: "#8cc6d9", color: "#000000", display: (showMenu) ? "block" : "none" }}>
                <div className="mx-3 my-auto" style={{ padding: "12px 0px" }} onClick={() => { setRemindersSubmenu(false); setShowTimetableSubmenu((prevState: boolean) => !prevState) }}>Timetable</div>
                <div id="timetable-submenu" style={{ backgroundColor: "#E0E8EB", display: (showTimetableSubmenu) ? "block" : "none" }}>
                    <div className="mx-3 my-auto" style={{ padding: "4px 0px" }}><Link to="/timetable/dailyschedules" className="mobile-submenu-items">Daily Schedules</Link></div>
                    <div className="mx-3 my-auto" style={{ padding: "4px 0px" }}><Link to="/timetable/moduledetails" className="mobile-submenu-items">Module Details</Link></div>
                </div>
                <div className="mx-3 my-auto" style={{ padding: "12px 0px" }} onClick={() => { setShowTimetableSubmenu(false); setRemindersSubmenu((prevState: boolean) => !prevState) }}>Reminders</div>
                <div id="reminders-submenu" style={{ backgroundColor: "#E0E8EB", display: (showRemindersSubmenu) ? "block" : "none" }}>
                    <div className="mx-3 my-auto" style={{ padding: "4px 0px" }}><Link to="/reminders/coursedates" className="mobile-submenu-items">Course Dates</Link></div>
                    <div className="mx-3 my-auto" style={{ padding: "4px 0px" }}><Link to="/reminders/assignmentduedates" className="mobile-submenu-items">Assignment Due Dates</Link></div>
                </div>
            </div>
        </div>
    );
}

export default NavBarMobile;
