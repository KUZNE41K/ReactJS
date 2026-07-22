import "./StatisticCard.css";

const StatisticCard = ({ src = "", description = "", quantity, statistics }) => {
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