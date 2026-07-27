import"./DealsDetails.css"
import DealsTableHeader from "./DealsTableHeader.jsx";
import MonthDropdown from "../../../../Components/MonthDropdown/MonthDropdown.jsx";
const DealsDetails =() => {
    return(
        <div className="deals-details">
            <div className="deals-details__header">
                <h2>Deals Details</h2>
                <MonthDropdown />
            </div>
            <div className="deals-details__body">
                <DealsTableHeader/>
            </div>

        </div>

    )
}
export default DealsDetails