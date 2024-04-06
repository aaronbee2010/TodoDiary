import { useEffect } from "react";
import App from "./components/App";

const moduleList = [
    {
        name: "ADXD2SD4M2 - Building Responsive Web Applications",
        dates : [
            { startDate: "2024-04-03", endDate: "2024-04-05", cohort: "041223", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-04-10", endDate: "2024-04-12", cohort: "041224", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-04-17", endDate: "2024-04-19", cohort: "041225", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-04-24", endDate: "2024-04-26", cohort: "041226", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-05-03", endDate: "2024-05-05", cohort: "041227", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-05-10", endDate: "2024-05-12", cohort: "041228", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-05-17", endDate: "2024-05-19", cohort: "041229", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-05-24", endDate: "2024-05-26", cohort: "041230", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-05-31", endDate: "2024-06-02", cohort: "041231", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-06-07", endDate: "2024-06-09", cohort: "041232", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-06-14", endDate: "2024-06-16", cohort: "041233", location: "QA On-Line Virtual Centre" },
            { startDate: "2024-06-21", endDate: "2024-06-23", cohort: "041234", location: "QA On-Line Virtual Centre" },
        ],
        materials: [
            { key: "Vimeo Courseware Code", value: "GBNYHA9KEO12" },
        ],
    }
];

const ModuleDetails = () => {
    useEffect(() => {
        document.title = "TodoDiary - Module Details";
    }, []);

    const moduleOptions: any = [];
    const dateRows: any = [];
    const materialRows: any = [];
    
    moduleList.map(mod => {
        moduleOptions.push(
            <option key={`option_${mod.name}`}>{mod.name}</option>
        );
        mod.dates.map(dt => {
            const sdPretty = new Date(dt.startDate).toLocaleDateString();
            const edPretty = new Date(dt.endDate).toLocaleDateString();
            dateRows.push(
                <tr key={`date-row-${dt.cohort}`}>
                    <td>{dt.cohort}</td>
                    <td>{sdPretty}</td>
                    <td>{edPretty}</td>
                    <td>{dt.location}</td>
                </tr>
            );
        });
        mod.materials.map(mt => {
            materialRows.push(
                <tr key={`material-row-${mt.key}`}>
                    <th style={{ textWrap: "nowrap" }}>{mt.key}</th>
                    <td style={{ width: "100%", }}>{mt.value}</td>
                </tr>
            );
        });
    });

    const main = (
        <main>
            <div style={{ marginBottom: "32px", }}>
                <label><span style={{ fontWeight: "600", }}>Select module</span></label>
                <div style={{ marginBottom: "4px", }} />
                <select style={{ fontSize: "12px", padding: "2px 4px", }}>
                    {moduleOptions}
                </select>
            </div>
            <div style={{ marginBottom: "32px", }}>
                <table id="module-details-table">
                    <thead>
                        <tr>
                            <th>Cohort</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th style={{ width: "100%", }}>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dateRows}
                    </tbody>
                </table>
            </div>
            <div style={{ marginBottom: "32px", }}>
                <label><span style={{ fontWeight: "600", }}>Materials for selected module</span></label>
                <div style={{ marginBottom: "4px", }} />
                <table id="module-details-table">
                    <tbody>
                        {materialRows}
                    </tbody>
                </table>
            </div>
        </main>
    );

    return <App main={main}/>;
}

export default ModuleDetails;
