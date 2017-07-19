import React from 'react'
import './mainPanel.css'

import Home from '../Home'
import Page1 from '../Page1'

import { Route, Switch } from 'react-router-dom'

const MainPanel = (props) => {
    return(
        <div id="main-panel">
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/page1' component={Page1}/>
            </Switch>
        </div>
    )
}

export default MainPanel