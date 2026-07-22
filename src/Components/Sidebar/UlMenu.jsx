import NavigationButton from "./NavigationButton.jsx";


const UlMenu = (props) =>{
    const{
        className =""
    } = props

    return (
        <ul className={className}>
            <NavigationButton value="1" href="/products" li="Products"/>
            <NavigationButton value="2" href="/favorites" li="Favorites"/>
            <NavigationButton value="3" href="/inbox" li="Inbox"/>
            <NavigationButton value="4" href="/orders" li="Order Lists"/>
            <NavigationButton value="5" href="/stock" li="Product Stock"/>

            <NavigationButton value="6" href="/pricing" li="Pricing"/>
            <NavigationButton value="7" href="/calendar" li="Calendar"/>
            <NavigationButton value="8" href="/todo" li="To-do"/>
            <NavigationButton value="9" href="/contacts" li="Contacts"/>
            <NavigationButton value="10" href="/invoice" li="Invoice"/>
            <NavigationButton value="11" href="/ui-elements" li="UI Elements"/>
            <NavigationButton value="12" href="/team" li="Team"/>
            <NavigationButton value="13" href="/table" li="Table"/>

            <NavigationButton value="14" href="/settings" li="Settings"/>
            <NavigationButton value="15" href="/logout" li="Logout"/>
        </ul>
    )
}
export default UlMenu