import { combineReducers } from 'redux';
import reducerCity from './reducerCity';
import reduceritinerary from './reduceritinerary';

export default combineReducers ({
    city: reducerCity,
    itinerary: reduceritinerary
});