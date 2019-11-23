/* function getCities(){
    return(dispatch, getState)=> {
        if(getState().length>0)
       return fetch('http://localhost:5000/api/city').then((res)=>{
            return res.json()
        }).then(data) => {
            dispatch({
                type:'GET_CITIES'
                payload: data
            })
        }
    }
} */

import {GET_CITIES} from './type';
import Axios from 'axios';

export const getCities = () => dispatch => {
    Axios.get('http://localhost:5000/api/city')
    .then(res=>
        dispatch({
            type:GET_CITIES,
            payload:res.data
        })
        )
}



/*

export const addCity = payload => ({
    type: 'ADD_CITY',
    payload:payload
})

export const deleteCity = payload=>({
    type:'DELETE_CITY',
    payload:payload
})

export const getCities = payload=>({
    type:'GET_CITIES',
    payload:payload
}) */