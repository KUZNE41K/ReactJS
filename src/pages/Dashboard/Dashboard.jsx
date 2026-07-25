import StatisticCard from "./Components/StatisticCard/StatisticCard.jsx";
import  "./Dashboard.css"
import SalesDetails from "./Components/SalesDetails/SalesDetails.jsx";
const Dashboard = () =>
{
    return (
        <div className="dashboard">
            <div className="statistics">
                <StatisticCard src = "User.svg" description="Total user" quantity="40,689" statistics="8.5% Up from yesterday"/>
                <StatisticCard src = "Order.svg" description="Total order" quantity="10293" statistics="1.3% Up from past week"/>
                <StatisticCard src = "Sales.svg" description="Total sales" quantity="$89,000" statistics="4.3% Down from yesterday"/>
                <StatisticCard src = "Pending.svg" description="Total pending" quantity="2040" statistics="1.8% Up from yesterday"/>
            </div>

            <SalesDetails/>
        </div>
    )
}
export default Dashboard