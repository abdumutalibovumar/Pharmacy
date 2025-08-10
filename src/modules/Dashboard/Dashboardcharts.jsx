import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const monthlyData = [
    { name: "1-7", actual: 800, max: 1000 },
    { name: "8-14", actual: 600, max: 1000 },
    { name: "15-21", actual: 500, max: 1000 },
    { name: "22-30", actual: 950, max: 1000 },
];

const yearlyData = [
    { name: "Окт", actual: 800, max: 1000 },
    { name: "Ноя", actual: 2000, max: 1000 },
    { name: "Дек", actual: 5000, max: 1000 },
    { name: "Янв", actual: 4000, max: 1000 },
    { name: "Фев", actual: 750, max: 1000 },
    { name: "Март", actual: 1250, max: 1000 },
    { name: "Апр", actual: 3000, max: 1000 },
    { name: "Май", actual: 1600, max: 1000 },
    { name: "Июнь", actual: 300, max: 1000 },
    { name: "Июль", actual: 500, max: 1000 },
    { name: "Авг", actual: 3000, max: 1000 },
    { name: "Ноя", actual: 3000, max: 1000 },
];

const DashboardCharts = () => {
    return (
        <div className="charts-section">
            <div className="chart-box">
                <div className="chart-header">
                    <h3>Месячный отчет</h3>
                    <span>Апрель ⌄</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={monthlyData}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 1000]} />
                        <Tooltip />
                        <Bar dataKey="max" fill="#ddd" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="actual" fill="#1e3a8a" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-box">
                <div className="chart-header">
                    <h3>Годовой отчет</h3>
                    <span>2025 ⌄</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={yearlyData}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 1000]} />
                        <Tooltip />
                        <Bar dataKey="max" fill="#ddd" radius={[10, 10, 0, 0]} />
                        <Bar dataKey="actual" fill="#1e3a8a" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DashboardCharts;
