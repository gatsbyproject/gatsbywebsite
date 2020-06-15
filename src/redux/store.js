import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './root-reducer'
import React from 'react'
import { getEvents } from './Events/events.action'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
store.dispatch(getEvents())
export default ({ element }) => <Provider store={store}><PersistGate persistor={persistor}>{element}</PersistGate></Provider>