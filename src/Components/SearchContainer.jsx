import ButtonSearch from "./ButtonSearch.jsx";

const SearchIcon = (props) => {
    const {
        className = "",
        type ="",
        placeholder = ""
    }= props
    return (
        <div className={className}>
            <ButtonSearch className = "searchIcon" src = "search.png" alt = "search" />
            <input type={type} placeholder={placeholder}/>
        </div>
    )
}
export default SearchIcon