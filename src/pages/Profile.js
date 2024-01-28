import BackgroundSub from "../component/BackgroundSub";
import profileImg from "../img/profile.png"
import "./Profile.css"

function Profile() {
    return (
        <div>
            <BackgroundSub />
            <div className="pf">
                <h1></h1>
                <div className="profile_box" alt="profile">
                    <img src={profileImg} />
                </div>
                <div className="txt_profile">
                    <p><b>NAME</b></p>
                    <p>황혜진 | Hyejin Hwang</p>
                    <p><b>DATE OF BIRTH</b></p>
                    <p>1995. 12. 26</p>
                    <p><b>EDUCATION</b></p>
                    <p>POLIMODA | Fashion Design</p>
                    <p>이젠 아카데미 UIUX/프론트엔드 수료<br />
                        2023.9.22-24.2.1</p>
                    <p><b>EMAIL</b></p>
                    <p>luvxxin@gmail.com</p>
                </div>
            </div>
        </div >
    )
}
export default Profile;