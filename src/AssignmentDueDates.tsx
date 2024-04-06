import { useState } from "react";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";

const data = [
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-04-03", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-04-10", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-04-17", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-04-24", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-05-03", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-05-10", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-05-17", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-05-24", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-05-31", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-06-07", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-06-14", notifyLength: "12", notifyUnit: "h" },
    { course: "A2.2 | Practise | Building Responsive Web Applications (Live Session)", startDate: "2024-06-21", notifyLength: "12", notifyUnit: "h" },
];

const AssignmentDueDates = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const dateRows = data.map(d => {
        const sdPretty = new Date(d.startDate).toLocaleDateString();
        let unitPretty = "";
        switch (d.notifyUnit) {
            case "h":
                unitPretty = (d.notifyLength === "1") ? "hour" : "hours";
                break;
            default:
                throw new Error("Unknown unit passed to CourseDates.dateRows()");
        }

        return (
            <tr key={`${d.course}_${d.startDate}`}>
                <td>{d.course}</td>
                <td style={{ textWrap: "nowrap" }}>{sdPretty}</td>
                <td style={{ textWrap: "nowrap" }}>{`${d.notifyLength} ${unitPretty} before`}</td>
            </tr>
        );
    });

    return (
        <div className="d-flex flex-row">
            <div className="flex-grow-1">
                <NavBar showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
                <main>
                    <label><span style={{ fontWeight: "600", }}>Assignment Due Date Reminders</span></label>
                    <div style={{ marginBottom: "8px", }} />
                    <table>
                        <thead>
                            <tr>
                                <th>Assignment</th>
                                <th>Start Date</th>
                                <th>Notify When</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dateRows}
                        </tbody>
                    </table>
                </main>
            </div>
            <Notifications setShowNotifications={setShowNotifications} />
        </div>
    );
}

export default AssignmentDueDates;
