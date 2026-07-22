const LiMenuSection = props => {
    const {
        className ="",
        li = ""
    } = props
    return (
        <li className={className}>{li}</li>
    )
}
export default LiMenuSection