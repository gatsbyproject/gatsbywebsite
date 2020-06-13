import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './root-reducer'
import React from 'react'
import { getEvents } from './Events/events.action'

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getEvents())

export default ({ element }) => <Provider store={store}>{element}</Provider>