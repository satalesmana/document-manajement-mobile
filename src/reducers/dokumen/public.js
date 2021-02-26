import {
    SET_PUBLIC_DOKUMEN,
    ADD_PUBLIC_DOKUMEN,
    RESET_PUBLIC_DOKUMEN
} from '../../actions'

const initialState ={
    publicdokumen:[]
}

const publicDokumenReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SET_PUBLIC_DOKUMEN:
            return{
                ...state,
                publicdokumen:action.publicdokumen
            }
        case ADD_PUBLIC_DOKUMEN:
            return {
                ...state,
                publicdokumen: [...state.publicdokumen, ...action.publicdokumen]
            }
        case RESET_PUBLIC_DOKUMEN:
            return{
                ...state,
                publicdokumen:[]
            }
        default:
            return state
    }
}

export default publicDokumenReducer;