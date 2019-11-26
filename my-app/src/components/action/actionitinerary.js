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
