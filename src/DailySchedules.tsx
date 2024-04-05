import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Notifications from "./components/Notifications";

const data: any = {
    schedules: {
        _9_30:  { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: true , lastInSession: false },
        _10_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _10_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _11_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _11_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _12_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _12_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: true  },
        _14_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: true , lastInSession: false },
        _14_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _15_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _15_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _16_00: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: false },
        _16_30: { name: "Building Responsive Web Applications (ADXD2SD4M2) - Cohort 041223", firstInSession: false, lastInSession: true  },
    },
    materials: [
        { id: "1", key: "Teams Meeting Code", value: "203 840 480 284 9" }, 
        { id: "2", key: "Vimeo Courseware Code", value: "GBNYHA9KEO12" },
    ]
};

const DailySchedules = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        document.title = "TodoDiary - Daily Schedules";
    }, []);

    // I'm gonna feel *really* dumb if there's a simpler way to do this...
    const rows = [];
    for (let index = 0, hour = 9, minute = false, meridiem = false; index < 18; hour = (minute) ? hour + 1 : hour, minute = !minute, meridiem = (hour > 11), ++index) {
        const hourString = `${(hour < 10) ? "0" : ""}${(hour > 12) ? hour - 12 : hour}`;
        const minuteString = (minute) ? "30" : "00";
        const meridiemString = (meridiem) ? "PM" : "AM";

        const schedulesKeys = Object.keys(data.schedules);
        const scheduleColour = "#FFB2D9";

        rows.push(
            <tr key={`${hour}_${minute}`}>
                <td style={{ textAlign: "center", width: "76px" }}>
                    {`${hourString}:${minuteString} ${meridiemString}`}
                </td>
                <td style={{ width: "500px", fontWeight: "600", backgroundColor: (schedulesKeys.includes(`_${hour}_${minuteString}`)) ? scheduleColour : "", borderBottom: (schedulesKeys.includes(`_${hour}_${minuteString}`) && !data.schedules[`_${hour}_${minuteString}`].lastInSession) ? `1px solid ${scheduleColour}` : "" }}>
                    {(schedulesKeys.includes(`_${hour}_${minuteString}`) && data.schedules[`_${hour}_${minuteString}`].firstInSession) && `${data.schedules[`_${hour}_${minuteString}`].name}`}
                </td>
            </tr>
        );
    }

    const materialRows = data.materials.map((material: { id: string; key: string; value: string; }) => {
        return (
            <tr key={material.id}>
                <td style={{ width: "162px", textAlign: "center", fontWeight: "600" }}>{material.key}</td>
                <td style={{ width: "414px" }}>{material.value}</td>
            </tr>
        );
    });

    return (
        <div className="d-flex flex-row">
            <div className="flex-grow-1">
                <NavBar showNotifications={showNotifications} setShowNotifications={setShowNotifications} />
                <div id="daily-schedules-main">
                    <div style={{ marginBottom: "32px", }}>
                        <label><span style={{ fontWeight: "600", }}>Select date</span></label>
                        <div style={{ marginBottom: "4px", }} />
                        <input type="date" style={{ fontSize: "14px", padding: "2px 4px", }} />
                    </div>
                    <div style={{ marginBottom: "32px", }}>
                        <table id="daily-schedules-table">
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginBottom: "32px", }}>
                        <label><span style={{ fontWeight: "600", }}>Materials for selected day</span></label>
                        <div style={{ marginBottom: "4px", }} />
                        <table id="daily-schedules-table">
                            <tbody>
                                {materialRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Notifications setShowNotifications={setShowNotifications} />
        </div>
    );
}

export default DailySchedules;