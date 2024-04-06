import { useEffect } from "react";
import App from "./components/App";

const data = [
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-04-03", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-04-10", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-04-17", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-04-24", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-05-03", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-05-10", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-05-17", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-05-24", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-05-31", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-06-07", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-06-14", notifyLength: "12", notifyUnit: "h" },
    { course: "041223 - Building Responsive Web Applications (ADXD2SD4M2)", startDate: "2024-06-21", notifyLength: "12", notifyUnit: "h" },
];

const CourseDates = () => {
    useEffect(() => {
        document.title = "TodoDiary - Course Dates";
    }, []);

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
                <td>{sdPretty}</td>
                <td>{`${d.notifyLength} ${unitPretty} before`}</td>
            </tr>
        );
    });

    const main = (
        <main>
            <label><span style={{ fontWeight: "600", }}>Course Date Reminders</span></label>
            <div style={{ marginBottom: "8px", }} />
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Start Date</th>
                        <th>Notify When</th>
                    </tr>
                </thead>
                <tbody>
                    {dateRows}
                </tbody>
            </table>
        </main>
    );

    return <App main={main}/>;
}

export default CourseDates;
