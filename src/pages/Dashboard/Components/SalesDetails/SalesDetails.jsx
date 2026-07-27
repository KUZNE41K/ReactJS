import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import MonthDropdown from "../../../../Components/MonthDropdown/MonthDropdown.jsx";
import "./SalesDetails.css"
const data = [
    { day: 1, sales: 320 },
    { day: 2, sales: 450 },
    { day: 3, sales: 380 },
    { day: 4, sales: 510 },
    { day: 5, sales: 620 },
    { day: 6, sales: 570 },
    { day: 7, sales: 690 },
];

const SalesDetails = () => {
    return (
        <div className="salesChart">

            <div className="salesChart__header">
                <h2>Sales Details</h2>
                <MonthDropdown />
            </div>

            <ResponsiveContainer width="100%" height={444}>
                <AreaChart data={data}>

                    <XAxis dataKey="day" />
                    <YAxis />
                    <CartesianGrid vertical={false} stroke="#E2E2E2" />

                    <defs>
                        <linearGradient
                            id="salesGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#4880FF"
                                stopOpacity={0.35}
                            />
                            <stop
                                offset="100%"
                                stopColor="#4880FF"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <Tooltip content={<CustomTooltip/>}/>

                    <Area
                        type="linear"
                        dataKey="sales"
                        stroke="#4880FF"
                        strokeWidth={3}
                        fill="url(#salesGradient)"
                        dot={{ r: 4 }}
                        activeDot={{ r: 8,
                        fill: "#F1963A",
                        stroke: "#F1963A"}}
                    />

                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
};
export default SalesDetails

const CustomTooltip = ({ active, payload, label })=>
{
    if (!active || !payload || payload.length === 0) {
        return null;
    }

    return(
        <div className="salesChart__tooltip">
            <p className="toolTipDay">Day: {label}</p>
            <h3>${payload[0].value}</h3>
        </div>
    )
}