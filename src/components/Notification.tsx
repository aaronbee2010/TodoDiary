import Event from '../utilities/Event';

const Notification = ({ event }: { event: Event }): JSX.Element => {
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

    const currentDate = new Date();
    const eventDate = new Date(event.date);
    const diff = Math.floor((eventDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <div className="notification">
            <div>
                {typePretty}:<br /><b>{event.name}</b>
            </div>
            <br />
            <div>
                Cohort {event.cohort} - {startOrEnd} <b>{diff} days</b>
            </div>
        </div>
        
    );
}

export default Notification;