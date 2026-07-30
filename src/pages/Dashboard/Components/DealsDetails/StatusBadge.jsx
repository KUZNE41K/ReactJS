import "./StatusBadge.css";

const statusClasses = {
    Delivered: "delivered",
    Pending: "pending",
    Rejected: "rejected",
};

const StatusBadge = ({ title }) => {
    return (
        <div className={`status__badge ${statusClasses[title]}`}>
            <span>{title}</span>
        </div>
    );
};
export default StatusBadge;