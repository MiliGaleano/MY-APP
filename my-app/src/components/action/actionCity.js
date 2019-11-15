export const addCity = payload => ({
    type: 'ADD_PROD',
    payload:payload
})

export const deleteProduct = payload=>({
    type:'DELETE_PROD',
    payload:payload
})

export const getItems = payload=>({
    type:'GET_ITEMS',
    payload:payload
})