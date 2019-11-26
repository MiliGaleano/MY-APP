import {GET_ITINERARIES} from '../action/type'

const initialState={
    itineraries:[]
}

export default function reduceritinerary (state = initialState,action){
    switch (action.type) {
        case GET_ITINERARIES: 
            return {
                ...state,
                itineraries: action.payload
    }
            
            default:
                return state;
    }
}