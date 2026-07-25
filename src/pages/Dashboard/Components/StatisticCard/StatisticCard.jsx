import "./StatisticCard.css";

const StatisticCard = (props) => {

    const{
        src = "",
        description = "",
        quantity,
        statistics
        }=props
    return (
        <div className="statisticCardContainer">
            <p className="description">{description}</p>

            <div className="middle">
                <h1>{quantity}</h1>
                <img className="statisticImg" src={src} alt="Logo" />
            </div>

            <p className="statistics">{statistics}</p>
        </div>
    );
};

export default StatisticCard;