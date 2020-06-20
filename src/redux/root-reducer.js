import { combineReducers } from 'redux';

import eventReducer from './Events/events.reducer'

import userReducer from './User/user.reducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,

};
const rootReducer = combineReducers({
    event: eventReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);;