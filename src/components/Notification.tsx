import EventModel from '../utilities/EventModel';

const Notification = ({ event }: { event: EventModel }): JSX.Element => {
    let typePretty: string = "";
    let startOrEnd: string = "";

    switch (event.type) {
        case "course":
            typePretty = "Course";
            startOrEnd = "starts in"
            break;
        case "assignment":
            typePretty = "Assignment";
            startOrEnd = "due in";
            break;
    }

    return (
        <div className="notification">
            <div>
                {typePretty}:<br /><b>{event.name}</b>
            </div>
            <br />
            <div>
                Cohort {event.cohort} - {startOrEnd} <b>{event.getTimeUntilDate("days", false)}</b>
            </div>
        </div>
        
    );
}

export default Notification;