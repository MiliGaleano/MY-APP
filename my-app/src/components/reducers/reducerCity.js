import {GET_CITIES} from '../action/type'

const initialState={
    cities:[]
}

export default function reducerCity (state = initialState,action){
    switch (action.type) {
        case GET_CITIES: 
            return {
                ...state,
                cities: action.payload
    }
            
            default:
                return state;
    }
}

/*
const cityReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CITIES': //tipo q puse en action
            return [
                ...state,
                {
                    cities: action.payload
                }
            ]
            //case 'DELETE_PROD':
            //    let state2 = state.slice()
            //    return state.filter((prod)=>{return prod._id!==action.payload});
            default:
                return state;
    }
}

export default cityReducer
*/