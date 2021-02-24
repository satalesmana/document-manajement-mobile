import {
    SET_RELATED_DOKUMEN
} from '../../actions'

const initialState ={
    relatedDokumen:[]
}

const relatedDokumenReducer = (state = initialState, action) => {
    
    switch(action.type){
        case SET_RELATED_DOKUMEN:
            return{
                ...state,
                relatedDokumen:action.relatedDokumen
            }
        default:
            return state
    }
}

export default relatedDokumenReducer;