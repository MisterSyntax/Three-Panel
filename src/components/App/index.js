import React from 'react'
import './App.css'

import Home from '../../containers/Home/'

import Header from '../Header'
import SideNav from '../SideNav'
import MainPanel from '../MainPanel'

export default class App extends React.Component {

    render() {
        return(
            <div id="app">
                <Header />
                <div className="horizontal-items">
                    <SideNav />
                    <MainPanel />
                </div>
            </div>
        )
    }
}
