import { combineReducers } from 'redux';

import eventReducer from './Events/events.reducer'

import userReducer from './User/user.reducer'

const rootReducer = combineReducers({
    event: eventReducer,
    user: userReducer
});

export default rootReducer;