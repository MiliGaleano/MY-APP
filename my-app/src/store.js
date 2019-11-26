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
/*

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
*/

/*
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import cityReducer from './components/reducers/reducerCity';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(cityReducer
    , composeWithDevTools(
  applyMiddleware(...middleware),
  //EXPLICACION THUNK applyMiddleware(thunk)
)
);

export default store;
*/


import { createStore,  applyMiddleware, compose} from 'redux';


import thunk from 'redux-thunk';
//import rootReducer from './components/reducers/reducerCity';
//import rootReducer from './components/reducers/reduceritinerary';
import rootReducer from './components/reducers/index';

const initialState={};
const middleWare =[thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;