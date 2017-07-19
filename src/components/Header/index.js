import React from 'react'
import './header.css'

import HamburgerNav from '../HamburgerNav'

const Header = (props) => {
    return(
        <div id="header">
            <HamburgerNav/>
            <div className="header-title">
                Three-Panel-Licious
            </div>
        </div>
    )
}

export default Header