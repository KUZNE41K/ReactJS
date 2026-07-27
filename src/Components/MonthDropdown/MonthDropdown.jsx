import { useState } from "react";
import "./MonthDropdown.css"
const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const MonthDropdown =() => {
const [isOpen, setIsOpen] = useState(false);
const [selectedMonth, setSelectedMonth] = useState("October");

    return (
        <div className="dropdown">
            <button className = "dropdown_button" onClick={() => setIsOpen(!isOpen)}>
                <span>{selectedMonth}</span>
                <img src='/Shape.svg' alt=""/>
            </button>
            {
                isOpen && (
                    <ul className="dropdown_menu">
                        {months.map((month) => (
                            <li
                                key={month}
                            onClick={() =>{
                                setSelectedMonth(month);
                                setIsOpen(false);
                            }}
                            >
                                {month}
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
export default MonthDropdown;