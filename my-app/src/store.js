/*
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./REDUCERS/itemReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)
//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ //& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)
);

export default store;
*/


import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import cityReducer from './components/reducers/reducerCity';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(cityReducer
    , composeWithDevTools(
  applyMiddleware(...middleware),
)
);

export default store;