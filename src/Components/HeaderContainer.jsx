import SearchContainer from "./SearchContainer.jsx";
import ProfileContainer from "./ProfileContainer.jsx";

const headerContainer= (props)=>{
    const{
        classNameHeader="",
        className="",
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
export default headerContainer;