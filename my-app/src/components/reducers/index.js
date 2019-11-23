import { combineReducers } from 'redux';
import reducerCity from './reducerCity';
import itineraryReducer from './itineraryReducer';

export default combineReducers ({
    city: reducerCity,
    itinerary: itineraryReducer

});