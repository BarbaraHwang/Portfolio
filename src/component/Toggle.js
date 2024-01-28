import "./Toggle.css"
import { useNavigate } from "react-router-dom";

function Toggle() {
  /*   const MoveGoBack = () => { */
        const navigate = useNavigate();
        const onClickBtn = () => {
            navigate(-1);
        };

    return (
        <div>
            <div className="flip">
                <div className="toggleC on" onClick={onClickBtn}></div>
            </div>
        </div>
    )
}
export default Toggle;