import React from 'react'
import { Link } from 'react-router-dom'

const NavContent = ({closeClick=f=>f}) =>(
    <div className="nav-content">
        <div className="nav-link" onClick={closeClick}><Link to='/Home'>Home</Link></div> 
        <div className="nav-link" onClick={closeClick}><Link to='page1'>Page 1</Link></div>  
    </div>)

export default NavContent

