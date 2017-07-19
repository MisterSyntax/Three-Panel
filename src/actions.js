/**
 * @desc: This file holds the action creators which dispatch actions, and non-reducer functions(e.g.)
 *      -generates unique ids
 *      -reading writing data to a persistance layer
 *      -mutate global state/vars
 *      -fetching data
 * @TODO: remove default enable/disable
 */
import C from "./constants"

export const openNav = () => {
    return {
        type: C.OPEN_NAV
    }
}

export const closeNav = () => {
    return {
        type: C.CLOSE_NAV
    }
}