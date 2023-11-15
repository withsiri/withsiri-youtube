import React, { useState } from "react"

import Logo from "../header/Logo.jsx"
import Menu from "../header/Menu.jsx"
import Sns from "../header/Sns.jsx"

const Header = () => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);

    const toggleMenu  = () => {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header id="header" role="banner" className={isMenuActive ? "active" : ""}>
            <Logo toggleMenu={toggleMenu}/>
            <Menu />
            <Sns />  
        </header>
    )
}

export default Header