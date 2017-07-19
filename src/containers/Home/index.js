/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import HamburgerNav from '../../components/HamburgerNav/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { openNav, closeNav } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        enable: state.hamburgerNavOpen
    }
)

const mapDispatchToProps = dispatch => {
    return{
        openNav(){
            dispatch(
                openNav()
            )
        },
        closeNav(){
            dispatch(
                closeNav()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerNav)