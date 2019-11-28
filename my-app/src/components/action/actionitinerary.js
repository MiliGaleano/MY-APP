import {GET_ITINERARIES} from './type';
import Axios from 'axios';

export const getItineraries = () => dispatch => {
    Axios.get('http://localhost:5000/api/itineraries')
    .then(res=>
        dispatch({
            type:GET_ITINERARIES,
            payload:res.data
        })
        )
}

export const getItinerariesBarcelona = () => dispatch => {
    Axios.get('http://localhost:5000/api/itineraries/5dbcb0ff1c9d440000f9a907')
    .then(res=>
        dispatch({
            type:GET_ITINERARIES,
            payload:res.data
        })
        )
}