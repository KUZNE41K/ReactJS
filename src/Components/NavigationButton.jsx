const NavigationButton = (prorps) =>{
    const{
        value,
        href ="",
        li,
    } = prorps
    return (
        <li><a value = {value} href = {href}>{li}</a></li>
    )

}
export default NavigationButton;