import ProfileContentText from "./ProfileContentText.jsx";

const ProfileInfoHeader = (props) => {
    const{
        className=""
    }=props
    return (
        <div className={className}>
            <ProfileContentText className ="profileName" text ="Profile Name"/>
            <ProfileContentText className ="profileStatus" text ="Status"/>
        </div>
    )
}
export default ProfileInfoHeader;