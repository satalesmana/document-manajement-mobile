import {
    SET_PUBLIC_DOKUMEN
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
        default:
            return state
    }
}

export default publicDokumenReducer;