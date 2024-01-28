import Home from '../pages/Home';
import Web from "../pages/Web";
import Profile from "../pages/Profile";
import Mobile from "../pages/Mobile";
import { useState } from 'react';
import Background from '../component/Background';
import Toggle from '../component/Toggle';
import "./Menu.css";

function Menu() {
    const menuTxt = [
        {title: "HOME", goToPage: '/'},
        {title: "WEBSITE", goToPage: '/Website'},
        {title: "MOBILE", goToPage: '/Mobile'},
        {title: "PROFILE", goToPage: '/Profile'},
        {title: "CONTACT", goToPage: '/Contact'},
    ]
/*     const [menuTxt, setTitle] = useState(['HOME','WEBSITE', 'MOBILE', 'PROFILE', 'CONTACT']);
    const onClickMenuTxt = () =>{
        setSearch(e.target.value);
    } */
    return (
        <div>
            <Background />
            <Toggle />
            <div className='menuBox'>
                {menuTxt.map((i)=><p><a href={i.goToPage}>{i.title}</a></p>)}
            </div>
        </div>
    )
}
export default Menu;

// WEB클릭하면 web 

