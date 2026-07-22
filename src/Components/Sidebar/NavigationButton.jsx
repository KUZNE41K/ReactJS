import { NavLink } from "react-router-dom";
const NavigationButton = (props) =>{
    const{
        href ="",
        li,
    } = props
    return (
        <NavLink to={href}>
            {li}
        </NavLink>
    )

}
export default NavigationButton;