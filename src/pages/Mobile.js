import Menu from "./Menu";
import "./Mobile.css"
import BackgroundSub from "../component/BackgroundSub";
import qr from "../img/qr.png"

function Mobile() {
    return (
        <div>
            <BackgroundSub />
            <div className="qr">
                <img src={qr} alt="qrImg" />

            </div>
        </div>
    )
}
export default Mobile;