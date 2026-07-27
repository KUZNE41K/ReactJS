import ProfileContainer from "./ProfileContainer.jsx";
import SearchContainer from "./SearchContainer.jsx";

const Header=(props)=>{
    const{
        className="",
        classNameHeader =""
    }=props
    return (
        <header className={classNameHeader}>
            <div className={className}>

                <SearchContainer className="searchContainer" type ="text" placeholder="Search"/>
                <ProfileContainer className="profileContainer"/>
            </div>
        </header>
    )
}
export default Header;