import NavigationButton from "./NavigationButton.jsx";
import LiMenuSection from "./LiMenuSection.jsx";

const UlMenu = (props) =>{
    const{
        className =""
    } = props

    return (
        <ul className={className}>
            <NavigationButton value = "1" href="/index" li ="Products"/>
            <NavigationButton value = "2" href="/favorites" li = "Favorites"/>
            <NavigationButton value = "3" href="" li ="Inbox"/>
            <NavigationButton value = "4" href="" li ="Order Lists"/>
            <NavigationButton value = "5" href="" li ="Product Stock"/>
            <LiMenuSection className="menu-section" li="Pages"/>
            <NavigationButton value = "6" href="" li ="Pricing"/>
            <NavigationButton value = "7" href="" li ="Calendar"/>
            <NavigationButton value = "8" href="" li ="To-do"/>
            <NavigationButton value = "9" href="" li ="Contacts"/>
            <NavigationButton value = "10" href="" li ="Invoice"/>
            <NavigationButton value = "11" href="" li ="UI Elements"/>
            <NavigationButton value = "12" href="" li ="Team"/>
            <NavigationButton value = "13" href="" li ="Table"/>
            <LiMenuSection className="menu-section"/>
            <NavigationButton value = "14" href="" li ="Settings"/>
            <NavigationButton value = "15" href="" li ="Logout"/>
        </ul>
    )
}
export default UlMenu