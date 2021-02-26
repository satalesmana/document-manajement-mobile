import {
    SET_MYDOKUMEN,
    RESET_MYDOKUMEN,
    ADD_MYDOKUMEN
} from '../../actions'

const initialState ={
    mydokumen:[]
}

const mydokumenReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_MYDOKUMEN:
            return{
                ...state,
                mydokumen:action.myDocument
            }
        case RESET_MYDOKUMEN:
            return {
                ...state,
                mydokumen:[]
            }
        case ADD_MYDOKUMEN:
            return{
                ...state,
                mydokumen: [...state.mydokumen, ...action.myDocument]
            }
        default:
            return state
    }
}

export default mydokumenReducer;