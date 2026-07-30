import"./DealsDetails.css"
import DealsTableHeader from "./DealsTableHeader.jsx";
import MonthDropdown from "../../../../Components/MonthDropdown/MonthDropdown.jsx";
import DealRow from "./DealRow.jsx";
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
            <div className="deal-row">
                <DealRow  product="Apple Watch"
                          img="AppleWatch.svg"
                          location="6096 Marjolaine Landing"
                          piece={423}
                          date_time="12.09.2026 - 12.53 PM"
                          amount="$34,295"/>
                <DealRow  product="Apple Watch"
                          img="AppleWatch.svg"
                          location="6096 Marjolaine Landing"
                          piece={423}
                          date_time="12.09.2026 - 12.53 PM"
                          amount="$34,295"/>
                <DealRow  product="Apple Watch"
                          img="AppleWatch.svg"
                          location="6096 Marjolaine Landing"
                          piece={423}
                          date_time="12.09.2026 - 12.53 PM"
                          amount="$34,295"/>
            </div>

        </div>

    )
}
export default DealsDetails