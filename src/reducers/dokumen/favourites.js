import {
    SET_FAVOURITE_DOKUMEN
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
        default:
            return state
    }
}

export default favouriteDokumenReducer;