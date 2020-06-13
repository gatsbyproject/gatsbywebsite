import { combineReducers } from 'redux';

import eventReducer from './Events/events.reducer'


const rootReducer = combineReducers({
    event: eventReducer
});

export default rootReducer;