const ButtonSearch =(props)=>{
    const {
        className ="",
        src= "",
        alt =""
    }= props
    return (
        <button>
        <img className={className}
             src={src}
             alt={alt}/>
        </button>
    )
}
export default ButtonSearch;