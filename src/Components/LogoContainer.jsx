import UlMenu from "./UlMenu.jsx";

const LogoContainer = (props) => {
    const{
        src = "",
        alt,
        className = "",
        classNameNav = ""
    }=props

    return (
        <nav className={classNameNav}>
            <div className={className}>
                <img src={src} alt={alt} className="logo"/>
            </div>
            <UlMenu className="menu"/>
        </nav>
    )
}
export default LogoContainer;