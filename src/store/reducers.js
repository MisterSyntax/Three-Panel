/**
 * @desc: Manage every key in the initialState.json file
 * @return: A combined reducer that has the same structure as the initialState
 */

import C from '../constants.js'
import { combineReducers } from 'redux'

//TODO: Remove/Replace Sample reducer
export const hamburgerNavOpen = (state = false, action) => {
    switch (action.type) {
        case C.OPEN_NAV: {
            return true
        }
        case C.CLOSE_NAV: {
            return false
        }
        default:{
            return state
        }
    }
}

export default combineReducers({
    hamburgerNavOpen
})