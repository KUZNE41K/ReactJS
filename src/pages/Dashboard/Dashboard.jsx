import StatisticCard from "./Components/StatisticCard/StatisticCard.jsx";
import  "./Dashboard.css"
const Dashboard = () =>
{
    return (
        <div className="dashboard">
            <StatisticCard src = "User.svg" description="Total user" quantity="40,689" statistics="8.5% Up from yesterday"/>
            <StatisticCard src = "Order.svg" description="Total order" quantity="10293" statistics="1.3% Up from past week"/>
            <StatisticCard src = "Sales.svg" description="Total sales" quantity="$89,000" statistics="4.3% Down from yesterday"/>
            <StatisticCard src = "Pending.svg" description="Total pending" quantity="2040" statistics="1.8% Up from yesterday"/>
            <StatisticCard src = "search.png" description="Total pending" quantity=" 12" statistics="12"/>
        </div>
    )
}
export default Dashboard