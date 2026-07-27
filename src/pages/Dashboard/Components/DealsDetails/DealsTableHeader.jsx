import "./DealsTableHeader.css"
const DealsTableHeader = () => {
    return (
        <div className="deals__table__header">
            <span>Product Name</span>
            <span>Location</span>
            <span>Date - Time</span>
            <span>Piece</span>
            <span>Amount</span>
            <span>Status</span>
        </div>
    )
}
export default DealsTableHeader;