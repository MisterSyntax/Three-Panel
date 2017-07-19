import React from 'react'
import './sideNav.css'

import { Link } from 'react-router-dom'

const SideNav = (props) => {
    return(
        <div id="side-nav">
            <div className="nav-link"><Link to='/Home'>Home</Link></div> 
            <div className="nav-link"><Link to='page1'>Page 1</Link></div>            
        </div>
    )
}

export default SideNav