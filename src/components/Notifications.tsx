import EventModel from "../utilities/EventModel";
import Notification from "./Notification";

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

const Notifications = ({setShowNotifications, isMobile}: {setShowNotifications: any, isMobile: boolean}) => {
    const notifications = upcomingEvents.map((upcomingEvent: { name: string; type: string; cohort: string; date: string; }): any => {
        const ue = new EventModel(upcomingEvent.name, upcomingEvent.type, upcomingEvent.cohort, upcomingEvent.date);
        return <Notification key={`${ue.name}_${ue.cohort}`} event={ue} />
    });

    return (
        <div id="notificationContainer" style={{ width: (isMobile) ? "100%" : "320px" }}>
            <div style={{padding: "8px",}}>
                <div className="d-flex flex-row justify-content-between">
                    <h4>Notifications</h4>
                    { (!isMobile)
                        ? (
                            <div onClick={() => {setShowNotifications(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                </svg>
                            </div>
                        )
                        : (<div></div>)
                    }
                </div>
            </div>
            {notifications}
        </div>
    );
}

export default Notifications;