import {
    SET_MYDOKUMEN
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
        default:
            return state
    }
}

export default mydokumenReducer;