import { combineReducers } from 'redux';
import reducerCity from './reducerCity';
import reduceritinerary from './reduceritinerary';

const rootReducer = combineReducers ({
    city: reducerCity,
    itinerary: reduceritinerary
});

export default rootReducer;