import LogoContainer from "./LogoContainer.jsx";
import Header from "./Header.jsx";

const wrapperSidebarHeader = (props)=>{
    const{
        className
    }=props
    return (
        <div className={className}>
            <LogoContainer classNameNav="navContainer" className="logoContainer" src="Logo.png" alt="logo" />
            <Header className="header"/>
        </div>
    )
}
export default wrapperSidebarHeader;