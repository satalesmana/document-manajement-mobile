import {
    SET_FAVOURITE_DOKUMEN,
    RESET_FAVOURITE_DOKUMEN,
    ADD_FAVOURITE_DOKUMEN
} from '../../actions'

const initialState ={
    favouritedokumen:[]
}

const favouriteDokumenReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SET_FAVOURITE_DOKUMEN:
            return{
                ...state,
                favouritedokumen:action.favouritedokumen
            }
        case RESET_FAVOURITE_DOKUMEN:
            return{
                ...state,
                favouritedokumen:[]
            }
        case ADD_FAVOURITE_DOKUMEN:
            return {
                ...state,
                favouritedokumen: [...state.favouritedokumen, ...action.favouritedokumen]
            }
        default:
            return state
    }
}

export default favouriteDokumenReducer;