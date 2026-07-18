import ProfileIcon from "./ProfileIcon.jsx";
import ProfileInfoHeader from "./ProfileInfoHeader.jsx";

const profileContainer =(props)=>{
    const{
        className ="",
    }=props
    return (
        <div className={className}>
            <ProfileIcon className ="profileIcon" src = "man-438081_960_720.png" alt="profileIcon"/>
            <ProfileInfoHeader className ="profileInfo"/>
        </div>
    )
}
export default profileContainer;