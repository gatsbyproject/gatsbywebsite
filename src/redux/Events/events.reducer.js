import { eventsActionTypes } from './events.types'

const INITIAL_STATE = {
    events: [],
    apiEvents: []
}

const eventReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case eventsActionTypes.SET_EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case eventsActionTypes.SETAPI_EVENTS:
            return {
                ...state,
                apiEvents: action.payload
            }
        default:
            return state
    }
}


export default eventReducer