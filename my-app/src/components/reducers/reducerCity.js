const cityReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEMS': //tipo q puse en action
            return [
                ...state,
                {
                    nombre: action.payload.nombre
                }
            ]
            //case 'DELETE_PROD':
            //    let state2 = state.slice()
            //    return state.filter((prod)=>{return prod._id!==action.payload});
            default:
                return state
    }
}

export default cityReducer