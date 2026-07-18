import HeaderContainer from "./HeaderContainer.jsx";

const header=(props)=>{
    const{
        className=""
    }=props
    return (
        <div className={className}>
            <HeaderContainer classNameHeader = "header" className ="headerContainer"/>
        </div>
    )
}
export default header;