import "./BackgroundSub.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ball from "../img/ball3.png"


function BackgroundSub() {
    const navigate = useNavigate();


    const moveProfile = () => {
        navigate('/Profile');
    }
    const moveMenu = () => {
        navigate('/Menu');
    }
/* 
    const moveWeb = () => {
        navigate('/Web');
    }

    const moveMobile = () => {
        navigate('/Mobile');
    }

    const moveContact = () => {
        navigate('/Contact');
    } */
    return (
        <div className="sub_full">
            <img src={ball} alt="배경캡슐" className="back_c1" />
            <div className="toggle" onClick={moveMenu}>
                <div className="toggleC"></div>
            </div>
        </div>
    )
}
export default BackgroundSub;



