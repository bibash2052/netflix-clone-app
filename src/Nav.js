import React, {useEffect, useState} from "react";
import "./Nav.css"
import logo from "./netflix.png";
import avatar from "./avatar.png";
function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
           if(window.scrollY > 100) {
               handleShow(true);
           } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };
    },[]);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src={logo} alt="Netflix Logo"/>
            <img className="nav__avatar" src={avatar} alt="Avatar Logo"/>
        </div>
    );
}

export default Nav;