import ButtonSearch from "../UI/ButtonSearch.jsx";

const SearchContainer = (props) => {
    const {
        className = "",
        type ="",
        placeholder = ""
    }= props
    return (
        <div className={className}>
            <ButtonSearch className = "searchIcon" src = "search.svg" alt = "search" />
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}
export default SearchContainer