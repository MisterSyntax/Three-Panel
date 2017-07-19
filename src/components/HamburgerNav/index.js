import React from 'react'
import NavContent from '../NavContent'

import './hamburgerNav.css'

export default class HamburgerNav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        this.handleNavIconClick = this.handleNavIconClick.bind(this)
    }
    handleNavIconClick(isOpen){
        this.setState({open:!isOpen})
    }
    render(){
        return(
        <div>
            <div className="hamburger-icon-container">

                <div className="hamburger-menu-icon" 
                    onClick={()=>this.handleNavIconClick(this.state.open)}
                >
                    =
                </div>

            </div>

            <div className={this.state.open ?
                "hamburger-nav"
                :"closed hamburger-nav"}
            >
                <NavContent closeClick={()=>this.handleNavIconClick(this.state.open)}/>
            </div>

            <div className={this.state.open ?
                "hamburger-nav-background"
                :"closed hamburger-nav-background"}
                onClick={()=>this.handleNavIconClick(this.state.open)}
            ></div>

        </div>
        )
        
    }
}