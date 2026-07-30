import "./DealRow.css"
import StatusBadge from "./StatusBadge.jsx";
const DealRow =(props) => {
    const {product,
        location,
        piece,
        amount,
        img,
        date_time
    }=props;
  return (
      <div className="deals-details-container">
          <div className="product">
              <img src={img} alt={product} />
              <span>{product}</span>
          </div>
          <span>{location}</span>
          <span>{date_time}</span>
          <span>{piece}</span>
          <span>{amount}</span>
          <StatusBadge title ="Delivered"/>
      </div>
  )
}
export default DealRow;